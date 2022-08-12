import image_processing from '../../utils/image_processing';

describe('image_processing func testing', () => {
  it('should get the processed image with the specified width and height', async () => {
    const filename = 'space_1';
    const width = 300;
    const height = 300;

    const res = await image_processing(filename, width, height);

    expect(res).toBeTruthy();
  });
});
