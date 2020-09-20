const request = require("supertest");
const faker = require("faker");

const app = require("../app");
const db = require("../config/db");
const Hotelier = require("../models/Hotelier");
const HotelierItem = require("../models/HotelierItem");
const Location = require("../models/Location");
const Category = require("../models/Category");
const { randomHoterlier, randomHoterlierItem } = require("./helper");

beforeEach(async (done) => {
  await db.sync({ force: true });
  done();
});

afterAll(async (done) => {
  await db.close();
  done();
});

describe("GET /hotelier-item/:id", () => {
  test("It should return 404 when hotelier item not found", async () => {
    return request(app).get("/hotelier-item/1").expect(404);
  });

  test("It should return hotelier when item it exists", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    const response = await request(app).get("/hotelier-item/1");

    expect(response.body.name).toEqual(data.name);
    expect(response.body.rating).toEqual(data.rating);
    expect(response.body.category).toEqual(data.category);
    expect(response.body.reputation).toEqual(data.reputation);
    expect(response.body.price).toEqual(data.price);
    expect(response.body.availability).toEqual(data.availability);
    expect(response.body.location.city).toEqual(data.location.city);
    expect(response.body.location.state).toEqual(data.location.state);
    expect(response.body.location.country).toEqual(data.location.country);
    expect(response.body.location.zip_code).toEqual(data.location.zip_code);
    expect(response.body.location.address).toEqual(data.location.address);
  });
});

describe("POST /hotelier-item/:id", () => {
  test("It should return 201 when data is valid and hotelier item is created", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    return request(app).post("/hotelier-item").send(data).expect(201);
  });

  test("It should create hotelier item when data is valid", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    const response = await request(app).post("/hotelier-item").send(data);

    const hotelierItem = (await HotelierItem.findByPk(1, { include: [Location] })).dataValues;

    expect(hotelierItem.name).toEqual(data.name);
    expect(hotelierItem.rating).toEqual(data.rating);
    expect(hotelierItem.category).toEqual(data.category);
    expect(hotelierItem.reputation).toEqual(data.reputation);
    expect(hotelierItem.price).toEqual(data.price);
    expect(hotelierItem.availability).toEqual(data.availability);
    expect(hotelierItem.location.city).toEqual(data.location.city);
    expect(hotelierItem.location.state).toEqual(data.location.state);
    expect(hotelierItem.location.country).toEqual(data.location.country);
    expect(hotelierItem.location.zip_code).toEqual(data.location.zip_code);
    expect(hotelierItem.location.address).toEqual(data.location.address);
  });

  test("It should return 400 when name is null", async () => {
    const data = randomHoterlierItem();
    data.name = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when rating is null", async () => {
    const data = randomHoterlierItem();
    data.rating = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when category is null", async () => {
    const data = randomHoterlierItem();
    data.category = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when image is null", async () => {
    const data = randomHoterlierItem();
    data.image = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when reputation is null", async () => {
    const data = randomHoterlierItem();
    data.reputation = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when price is null", async () => {
    const data = randomHoterlierItem();
    data.price = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when availability is null", async () => {
    const data = randomHoterlierItem();
    data.availability = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when location is null", async () => {
    const data = randomHoterlierItem();
    data.location = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when city is null", async () => {
    const data = randomHoterlierItem();
    data.location.city = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when state is null", async () => {
    const data = randomHoterlierItem();
    data.location.state = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when country is null", async () => {
    const data = randomHoterlierItem();
    data.location.country = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when zip_code is null", async () => {
    const data = randomHoterlierItem();
    data.location.zip_code = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });

  test("It should return 400 when address is null", async () => {
    const data = randomHoterlierItem();
    data.location.address = null;
    await Hotelier.create(randomHoterlier());

    return request(app).post("/hotelier-item").send(data).expect(400);
  });
});

describe("PUT /hotelier-item/:id", () => {
  test("It should return 200 when data is valid and hotelier item is modified", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    return request(app).put("/hotelier-item/1").send(data).expect(200);
  });

  test("It should update hotelier item when data is valid", async () => {
    const data = randomHoterlierItem();
    const updatedData = { ...data, name: faker.random.alphaNumeric(15) };

    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    const response = await request(app).put("/hotelier-item/1").send(updatedData);

    const hotelierItem = (await HotelierItem.findByPk(1, { include: [Location] })).dataValues;

    expect(hotelierItem.name).toEqual(updatedData.name);
    expect(hotelierItem.rating).toEqual(data.rating);
    expect(hotelierItem.category).toEqual(data.category);
    expect(hotelierItem.reputation).toEqual(data.reputation);
    expect(hotelierItem.price).toEqual(data.price);
    expect(hotelierItem.availability).toEqual(data.availability);
    expect(hotelierItem.location.city).toEqual(data.location.city);
    expect(hotelierItem.location.state).toEqual(data.location.state);
    expect(hotelierItem.location.country).toEqual(data.location.country);
    expect(hotelierItem.location.zip_code).toEqual(data.location.zip_code);
    expect(hotelierItem.location.address).toEqual(data.location.address);
  });

  test("It should return 400 when given id is invalid", async () => {
    const data = randomHoterlierItem();
    const updatedData = { ...data, name: faker.random.alphaNumeric(15) };

    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    await request(app).put("/hotelier-item/100").send(updatedData).expect(400);
  });

  test("It should return 400 when given data is invalid", async () => {
    const data = randomHoterlierItem();
    const updatedData = { ...data, name: null };

    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    await request(app).put("/hotelier-item/1").send(updatedData).expect(400);
  });
});

describe("DELETE /hotelier-item/:id", () => {
  test("It should return 200 when data is valid and hotelier item is deleted", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    return request(app).delete("/hotelier-item/1").expect(200);
  });

  test("It should delete hotelier item when data is valid", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    const response = await request(app).delete("/hotelier-item/1");

    const hotelierItem = await HotelierItem.findByPk(1, { include: [Location] });

    expect(hotelierItem).toEqual(null);
  });

  test("It should return 400 when given id is invalid", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    await request(app).delete("/hotelier-item/100").expect(400);
  });
});

describe("put /hotelier-item/book/:id", () => {
  test("It should return 200 when data is valid and availability is updated", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    return request(app).put("/hotelier-item/book/1").expect(200);
  });

  test("It should decrease the availability by 1", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    const response = await request(app).put("/hotelier-item/book/1");

    const hotelierItem = (await HotelierItem.findByPk(1)).dataValues;

    expect(hotelierItem.availability).toEqual(data.availability - 1);
  });

  test("It should return 400 when given id is invalid", async () => {
    const data = randomHoterlierItem();
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    await request(app).put("/hotelier-item/book/100").expect(400);
  });

  test("It should return 400 when availability is 0", async () => {
    const data = randomHoterlierItem();
    data.availability = 0;
    await Hotelier.create(randomHoterlier());
    await HotelierItem.create(data, { include: [Location] });

    await request(app).put("/hotelier-item/book/1").expect(400);
  });
});
