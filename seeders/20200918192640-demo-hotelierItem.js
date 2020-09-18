"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("hotelier_items", [
      {
        name: "Hilton NYC",
        rating: "4",
        category: "hotel",
        image: "https://source.unsplash.com/400x300/?hotel,building",
        reputation: 900,
        availability: 10,
        hotelierId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mariot NYC",
        rating: "3",
        category: "hotel",
        image: "https://source.unsplash.com/400x300/?hotel,building",
        reputation: 700,
        availability: 5,
        hotelierId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ibis NYC",
        rating: "3",
        category: "hostel",
        image: "https://source.unsplash.com/400x300/?hotel,building",
        reputation: 500,
        availability: 20,
        hotelierId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hitlon Guest house NYC",
        rating: "4",
        category: "guesthouse",
        image: "https://source.unsplash.com/400x300/?hotel,building",
        reputation: 900,
        availability: 2,
        hotelierId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hoteliers", null, {});
  },
};
