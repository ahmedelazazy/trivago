const faker = require("faker");

const Category = require("../models/Category");

const randomHoterlier = () => ({
  name: faker.random.alphaNumeric(15),
});

const randomHoterlierItem = () => ({
  hotelierId: 1,
  name: faker.random.alphaNumeric(15),
  rating: faker.random.number({ min: 0, max: 5 }),
  category: Category[faker.random.number({ min: 0, max: Category.length - 1 })],
  image: faker.image.imageUrl(),
  reputation: faker.random.number({ min: 0, max: 1000 }),
  price: faker.random.number({ min: 1, max: 1000 }),
  availability: faker.random.number({ min: 0, max: 1000 }),
  location: {
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    zip_code: faker.random.number({ min: 10000, max: 99999 }),
    address: faker.address.streetAddress(),
  },
});

module.exports = {
  randomHoterlier,
  randomHoterlierItem,
};
