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
const express_1 = require("express");
const logger_1 = __importDefault(require("../logger"));
const image_processing_1 = __importDefault(require("../../utils/image_processing"));
const route = (0, express_1.Router)();
route.get('/images', logger_1.default, function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { filename, width, height } = req.query;
        const name = filename;
        const parsedWidth = parseInt(width);
        const parsedHeight = parseInt(height);
        try {
            if (name === undefined) {
                return res.send('name is required');
            }
            else if (!parsedWidth && !parsedHeight) {
                return res.send('Width & Height are required');
            }
            else {
                const processed_img = (yield (0, image_processing_1.default)(name, parsedWidth, parsedHeight));
                res.sendFile(processed_img);
            }
        }
        catch (error) {
            res.status(404).send('Image could not be processed.');
        }
    });
});
exports.default = route;
//# sourceMappingURL=resizeimg.js.map