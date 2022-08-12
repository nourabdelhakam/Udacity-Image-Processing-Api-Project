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
const supertest = require('supertest');
const app = require('../index');
const request = supertest(app);
describe('Endpoint response Test', () => {
    it('should gets valid api endpoint response', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images?filename=space_1&width=300&height=300/');
        console.log('response', response);
        expect(response.status).toBe(200);
    }));
});
//# sourceMappingURL=indexSpec.js.map