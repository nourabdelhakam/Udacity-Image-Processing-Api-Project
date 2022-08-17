import path from 'path';
import image_processer from '../../utils/image_processer';

const filePathFullImage = path.resolve(
  __dirname,
  '../../../assets/full/space_1.png'
);
const filePathThumbImage = path.resolve(
  __dirname,
  '../../../assets/thumb/space_1.png'
);

describe('The imageResizer function', (): void => {
  it('returns a buffer after sucessfully resizing an image', async () => {
    const imageBuffer: Buffer = await image_processer({
      height: 100,
      width: 150,
      filePathFullImage,
      filePathThumbImage,
    });
    expect(imageBuffer).toBeInstanceOf(Buffer);
  });

  it('rejects promise if something went wrong', async (): Promise<void> => {
    await expectAsync(
      image_processer({
        height: 100,
        width: 150,
        filePathFullImage: '',
        filePathThumbImage,
      })
    ).toBeRejected();
  });
});
