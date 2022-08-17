"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest = require('supertest');
const index_1 = __importDefault(require("../../../index"));
const request = supertest(index_1.default);
describe('GET /api/images', () => {
    it('responds with 400 if called without parameters', () => {
        request.get('/api/images').expect(400);
    });
    it('responds with 200 if called correctly and image exist', () => {
        request
            .get('/api/images?filename=space_1&height=100&width=100')
            .expect(200);
    });
});
//# sourceMappingURL=img_routerSpec.js.map