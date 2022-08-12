import { Router, Request, Response } from 'express';
import logger from '../logger';
import image_processing from '../../utils/image_processing';

const route = Router();

route.get('/images', logger, async function (req: Request, res: Response) {
  const { filename, width, height } = req.query;
  const name = filename as string;
  const parsedWidth = parseInt(width as string);
  const parsedHeight = parseInt(height as string);

  try {
    if (name === undefined) {
      return res.send('name is required');
    } else if (!parsedWidth && !parsedHeight) {
      return res.send('Width & Height are required');
    } else {
      const processed_img = (await (image_processing(
        name,
        parsedWidth,
        parsedHeight
      ) as unknown)) as string;

      res.sendFile(processed_img);
    }
  } catch (error) {
    res.status(404).send('Image could not be processed.');
  }
});

export default route;
