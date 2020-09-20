const request = require("supertest");
const faker = require("faker");

const app = require("../app");
const db = require("../config/db");
const Hotelier = require("../models/Hotelier");
const HotelierItem = require("../models/HotelierItem");
const Category = require("../models/Category");
const { randomHoterlier } = require("./helper");

beforeEach(async (done) => {
  await db.sync({ force: true });
  done();
});

afterAll(async (done) => {
  await db.close();
  done();
});

describe("GET /hotelier", () => {
  test("It should return 200 when no hoteliers found", async () => {
    return request(app).get("/hotelier").expect(200);
  });

  test("It should return empty array when no hoteliers found", async () => {
    return request(app).get("/hotelier").expect([]);
  });

  test("It should return filled array when 2 hoteliers exists", async () => {
    const data = [randomHoterlier(), randomHoterlier()];
    await Hotelier.bulkCreate(data);

    const response = await request(app).get("/hotelier");
    expect(response.body).toHaveLength(2);
    expect(response.body[0].name).toEqual(data[0].name);
    expect(response.body[1].name).toEqual(data[1].name);
  });
});

describe("GET /hotelier/:id", () => {
  test("It should return 404 when hotelier not found", async () => {
    return request(app).get("/hotelier/1").expect(404);
  });

  test("It should return hotelier when it exists", async () => {
    const data = [
      {
        name: faker.random.alphaNumeric(15),
        hotelier_items: [
          {
            name: faker.random.alphaNumeric(15),
            rating: faker.random.number({ min: 0, max: 5 }),
            category: Category[faker.random.number({ min: 0, max: Category.length - 1 })],
            image: faker.image.imageUrl(),
            reputation: faker.random.number({ min: 0, max: 1000 }),
            price: faker.random.number({ min: 1, max: 1000 }),
            availability: faker.random.number({ min: 0, max: 1000 }),
          },
        ],
      },
    ];
    await Hotelier.bulkCreate(data, { include: [HotelierItem] });

    const response = await request(app).get("/hotelier/1");

    expect(response.body.name).toEqual(data[0].name);
    expect(response.body.hotelier_items).toHaveLength(1);
    expect(response.body.hotelier_items[0].name).toEqual(data[0].hotelier_items[0].name);
    expect(response.body.hotelier_items[0].rating).toEqual(data[0].hotelier_items[0].rating);
    expect(response.body.hotelier_items[0].category).toEqual(data[0].hotelier_items[0].category);
    expect(response.body.hotelier_items[0].reputation).toEqual(data[0].hotelier_items[0].reputation);
    expect(response.body.hotelier_items[0].price).toEqual(data[0].hotelier_items[0].price);
    expect(response.body.hotelier_items[0].availability).toEqual(data[0].hotelier_items[0].availability);
  });
});
