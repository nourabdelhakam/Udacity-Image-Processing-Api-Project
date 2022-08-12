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
const image_processing_1 = __importDefault(require("../../utils/image_processing"));
describe('image_processing func testing', () => {
    it('should get the processed image with the specified width and height', () => __awaiter(void 0, void 0, void 0, function* () {
        const filename = 'space_1';
        const width = 300;
        const height = 300;
        const res = yield (0, image_processing_1.default)(filename, width, height);
        expect(res).toBeTruthy();
    }));
});
//# sourceMappingURL=image_processingSpec.js.map