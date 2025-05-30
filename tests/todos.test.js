const request = require('supertest');
const app = require('../app'); // app.js içinde sadece app = express() tanımlıysa
let server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    console.log('Test server running');
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('GET /todos', () => {
  it("todolist'i döner", async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
