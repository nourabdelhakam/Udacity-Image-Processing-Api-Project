const sharp = require('sharp');
import fs from 'fs/promises';

interface ResizeImageProps {
  width: number;
  height: number;
  filePathFullImage: string;
  filePathThumbImage: string;
}

const image_processer = async ({
  width,
  height,
  filePathFullImage,
  filePathThumbImage,
}: ResizeImageProps): Promise<Buffer> => {
  const data: Buffer | null = await fs
    .readFile(filePathFullImage)
    .catch(() => null);

  if (!data) {
    return Promise.reject();
  }

  const imageBuffer: Buffer | null = await sharp(data)
    .resize(width, height)
    .toBuffer()
    .catch(() => null);

  if (!imageBuffer) {
    return Promise.reject();
  }

  return fs
    .writeFile(filePathThumbImage, imageBuffer)
    .then(() => {
      return imageBuffer;
    })
    .catch(() => {
      return Promise.reject();
    });
};
export default image_processer;
