const supertest = require('supertest');
import app from '../../../index';

const request = supertest(app);

describe('GET /api/listImages', (): void => {
  it('responds with 200', (): void => {
    request.get('/api/listImages').expect(200);
  });
});
