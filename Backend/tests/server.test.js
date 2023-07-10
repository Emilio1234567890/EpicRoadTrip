const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
    it('should respond with a 200 status code', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('POST /api/auth/signin', () => {
    it('should return a 200 status code and a JWT token', async () => {
      const res = await request(app)
        .post('/api/auth/signin')
        .send({
          email: 'maxime@maxime.fr',
          password: 'Password'
        });
  
      expect(res.status).toBe(200);
      expect(res.body).toHaveProperty('accessToken');
    })
  });