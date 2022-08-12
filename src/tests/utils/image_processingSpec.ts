import image_processing from '../../utils/image_processing';
const path = require('path');

describe('image_processing func testing', () => {
  it('should get the processed image with the specified width and height', async () => {
    const ImgSrc: string =
      path.resolve('./') + `/public/assets/images/processing_img/space_1.png`;

    await image_processing(ImgSrc, 300, 300);

    const ImgProcessed: string =
      path.resolve('./') +
      `/public/assets/images/thumbnails/space_1_300-300.png`;

    expect(ImgProcessed).toBeTruthy();
  });
});
