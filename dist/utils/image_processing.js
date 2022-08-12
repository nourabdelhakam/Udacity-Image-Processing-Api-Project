"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require('sharp');
const path = require('path');
function image_processing(imgName, imgWidth, imgHeight) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                sharp(`./public/assets/images/processing_img/${imgName}.png`)
                    .resize({ width: imgWidth, height: imgHeight })
                    .toFile(`./public/assets/images/thumbnails/${imgName}_${imgWidth}-${imgHeight}.png`);
                const img_location = path.resolve('./') +
                    `/public/assets/images/thumbnails/${imgName}_${imgWidth}-${imgHeight}.png`;
                console.log('img_location', img_location);
                resolve(img_location);
            }
            catch (error) {
                reject();
                console.log('image_processing err log', error);
            }
        });
    });
}
exports.default = image_processing;
//# sourceMappingURL=image_processing.js.map