const faker = require("faker");

const Category = require("../models/Category");
const { Reputation, Rating } = require("../models/Constants");

const randomHoterlier = () => ({
  name: faker.company.companyName("20"),
});

const randomHoterlierItem = () => ({
  hotelierId: 1,
  name: faker.random.alphaNumeric(15),
  rating: faker.random.number({ min: Rating.min, max: Rating.max }),
  category: faker.random.arrayElement(Category),
  image: faker.image.imageUrl(),
  reputation: faker.random.number({ min: Reputation.min, max: Reputation.max }),
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

const randomShalowHoterlierItem = () => ({
  name: faker.company.companyName("20"),
  rating: faker.random.number({ min: Rating.min, max: Rating.max }),
  category: faker.random.arrayElement(Category),
  image: faker.image.imageUrl(),
  reputation: faker.random.number({ min: Reputation.min, max: Reputation.max }),
  price: faker.random.number({ min: 1, max: 1000 }),
  availability: faker.random.number({ min: 0, max: 1000 }),
});

const randomLocation = () => ({
  city: faker.address.city(),
  state: faker.address.state(),
  country: faker.address.country(),
  zip_code: faker.random.number({ min: 10000, max: 99999 }),
  address: faker.address.streetAddress(),
});

module.exports = {
  randomHoterlier,
  randomHoterlierItem,
  randomLocation,
  randomShalowHoterlierItem,
};
