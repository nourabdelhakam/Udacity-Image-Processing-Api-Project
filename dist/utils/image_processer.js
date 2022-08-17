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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp = require('sharp');
const promises_1 = __importDefault(require("fs/promises"));
const image_processer = ({ width, height, filePathFullImage, filePathThumbImage, }) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield promises_1.default
        .readFile(filePathFullImage)
        .catch(() => null);
    if (!data) {
        return Promise.reject();
    }
    const imageBuffer = yield sharp(data)
        .resize(width, height)
        .toBuffer()
        .catch(() => null);
    if (!imageBuffer) {
        return Promise.reject();
    }
    return promises_1.default
        .writeFile(filePathThumbImage, imageBuffer)
        .then(() => {
        return imageBuffer;
    })
        .catch(() => {
        return Promise.reject();
    });
});
exports.default = image_processer;
//# sourceMappingURL=image_processer.js.map