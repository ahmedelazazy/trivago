const request = require("supertest");
const faker = require("faker");

const app = require("../app");
const db = require("../config/db");

beforeEach(async (done) => {
  await db.sync({ force: true });
  done();
});

afterAll(async (done) => {
  await db.close();
  done();
});

describe("API root", () => {
  test("It should return 200 when calling API root", async () => {
    await db.sync({ force: true });
    return request(app).get("/api/v1/status").expect(200);
  });
});
