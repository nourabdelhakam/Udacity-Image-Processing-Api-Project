import path from 'path';
import image_processer from '../../utils/image_processer';

const filePathFullImage = path.resolve(
  __dirname,
  '../../../assets/imgs/space_1.png'
);
const filePathThumbImage = path.resolve(
  __dirname,
  '../../../assets/thumbnails/space_1.png'
);

describe('image_processer function', (): void => {
  it('returns a buffer after resizing image', async () => {
    const imageBuffer: Buffer = await image_processer({
      height: 100,
      width: 150,
      filePathFullImage,
      filePathThumbImage,
    });
    expect(imageBuffer).toBeInstanceOf(Buffer);
  });

  it('rejects something went wrong', async (): Promise<void> => {
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
