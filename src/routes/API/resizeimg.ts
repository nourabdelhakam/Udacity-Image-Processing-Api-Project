import { Router, Request, Response } from 'express';
import logger from '../logger';
import image_processing from '../../utils/image_processing';

const route = Router();

// http://localhost:3000/api/images?filename=${filename}&width=${width}&height=${height}/
// http://localhost:3030/api/images?filename=space_1&width=300&height=300/
// http://localhost:3000/api/images?width=300&height=300/

route.get('/images', logger, async function (req: Request, res: Response) {
  const { filename, width, height } = req.query;
  const name = filename as string;
  const parsedWidth = parseInt(width as string);
  const parsedHeight = parseInt(height as string);

  try {
    const processed_img = (await (image_processing(
      name,
      parsedWidth,
      parsedHeight
    ) as unknown)) as string;

    if (name === undefined) {
      return res.send('Bad Request, name is required');
    }
    res.sendFile(processed_img);
  } catch (error) {
    console.log('route err log', error);
  }
});

export default route;
