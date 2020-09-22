const { randomHoterlier, randomShalowHoterlierItem, randomLocation } = require("../tests/helper");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let hoteliers = [];
    let locations = [];
    let hotelierItems = [];

    for (let i = 0; i < 10; i++) {
      hoteliers.push({
        ...randomHoterlier(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    let hoteliersIds = await queryInterface.bulkInsert("hoteliers", hoteliers, { returning: ["id"] });

    for (let i = 0; i < 100; i++) {
      locations.push({
        ...randomLocation(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    let locationsIds = await queryInterface.bulkInsert("locations", locations, { returning: ["id"] });

    for (let i = 0; i < hoteliersIds.length; i++) {
      for (let j = 0; j < 10; j++) {
        hotelierItems.push({
          ...randomShalowHoterlierItem(),
          hotelierId: hoteliersIds[i].id,
          locationId: locationsIds[j + i * hoteliersIds.length].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    }

    await queryInterface.bulkInsert("hotelier_items", hotelierItems, { returning: ["id"] });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("hotelier_items", null, {});
    await queryInterface.bulkDelete("locations", null, {});
    await queryInterface.bulkDelete("hoteliers", null, {});
  },
};
