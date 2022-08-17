import express, { Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import image_processer from '../../utils/image_processer';
import { Stats } from 'fs';

const imageRouter = express.Router();

// get route and query params
imageRouter.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query['filename'];
  const height = req.query['height']
    ? parseInt(req.query['height'] as string, 10)
    : null;
  const width = req.query['width']
    ? parseInt(req.query['width'] as string, 10)
    : null;

  // check if the query is correct
  if (!filename || !height || !width) {
    res
      .status(400)
      .send(
        'Please make sure url contains correct filename, height and width params'
      );
    return;
  }

  // get the full path from the filename
  const filePathFullImage = `${path.resolve(
    __dirname,
    `../../../assets/full/${filename}.png`
  )}`;

  // thumb path in the ${filename}-${height}x${width} format to save different dimensions
  const filePathThumbImage = `${path.resolve(
    __dirname,
    `../../../assets/thumb/${filename}-${height}x${width}.png`
  )}`;

  // Check if filename exists in full folder
  const fullImage: Stats | null = await fs.stat(filePathFullImage).catch(() => {
    res.status(404).send('Image does not exist');
    return null;
  });

  if (!fullImage) {
    return;
  }

  // Check if thumb was already created
  const existingThumb: Stats | null = await fs
    .stat(filePathThumbImage)
    .catch(() => {
      return null;
    });

  if (existingThumb) {
    fs.readFile(filePathThumbImage)
      .then((thumbData: Buffer) => {
        res.status(200).contentType('png').send(thumbData);
      })
      .catch(() => {
        res.status(500).send('Error occured processing the image');
      });
  } else {
    // resize image
    image_processer({
      filePathFullImage,
      filePathThumbImage,
      height,
      width,
    })
      .then((resizedImage: Buffer) => {
        res.status(200).contentType('png').send(resizedImage);
      })
      .catch(() => {
        res.status(500).send('Error occured processing the image');
      });
  }
});

export default imageRouter;
