const request = require("supertest");
const faker = require("faker");

const app = require("../app");
const db = require("../config/db");
const Hotelier = require("../models/Hotelier");
const HotelierItem = require("../models/HotelierItem");
const Location = require("../models/Location");
const Category = require("../models/Category");

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
    return request(app).get("/").expect(200);
  });
});
