const supertest = require('supertest');
import app from '../../../index';

const request = supertest(app);

describe('GET /api/images', () => {
  it('responds with 400 if called without parameters', (): void => {
    request.get('/api/images').expect(400);
  });

  it('responds with 200 if called correctly and image exist', (): void => {
    request
      .get('/api/images?filename=space_1&height=100&width=100')
      .expect(200);
  });
});
