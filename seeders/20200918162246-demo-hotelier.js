"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("hoteliers", [
      {
        name: "Hilton",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mariot",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ibis",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Holiday Inn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Radisson",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "InterContinental",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hoteliers", null, {});
  },
};
