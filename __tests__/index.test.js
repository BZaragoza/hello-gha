import request from 'supertest'
import app from '../index'

describe("Get route", () => {
  it("page should return hello world", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.msg).toEqual("Hello world");
  });
});

afterAll(async () => {
  await app.close()
})