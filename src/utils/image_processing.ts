const sharp = require("sharp");
const path = require('path')
const fs = require("fs");

async function image_processing(imgName: string, imgWidth: unknown, imgHeight: unknown): Promise<unknown> {
    return new Promise((resolve, reject) => {
        try {
            sharp(`./public/assets/images/processing_img/${imgName}.png`).resize({ width: imgWidth, height: imgHeight }).toFile(`./public/assets/images/thumbnails/${imgName}_${imgWidth}-${imgHeight}.png`)
            const img_location = path.resolve('./') + `/public/assets/images/thumbnails/${imgName}_${imgWidth}-${imgHeight}.png`
            resolve(img_location);
        }
        catch (error) {
            reject();
            console.log('image_processing err log', error);
        }
    })
}

export default image_processing;