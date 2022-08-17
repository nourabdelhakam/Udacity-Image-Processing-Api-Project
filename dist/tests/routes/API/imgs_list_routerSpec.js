"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require('supertest');
const index_1 = __importDefault(require("../../../index"));
const request = supertest(index_1.default);
describe('GET /api/listImages', () => {
    it('responds with 200', () => {
        request.get('/api/listImages').expect(200);
    });
});
//# sourceMappingURL=imgs_list_routerSpec.js.map