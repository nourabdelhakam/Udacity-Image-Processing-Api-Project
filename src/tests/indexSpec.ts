const supertest = require('supertest');
import app from '../index';

const request = supertest(app);

describe('GET /', (): void => {
  it('should gets valid api endpoint response', async (): Promise<void> => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
  });
});
