const supertest = require('supertest');
const app = require('../index');

const request = supertest(app);

describe('Endpoint response Test', () => {
  it('should gets valid api endpoint response', async (): Promise<void> => {
    const response = await request.get(
      '/api/images?filename=space_1&width=300&height=300/'
    );
    console.log('response', response);

    expect(response.status).toBe(200);
  });
});
