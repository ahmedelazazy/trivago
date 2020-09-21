module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("locations", [
      {
        city: "NYC1",
        state: "NY1",
        country: "USA1",
        zip_code: "10001",
        address: "1 John St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city: "NYC2",
        state: "NY2",
        country: "USA2",
        zip_code: "10002",
        address: "2 John St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city: "NYC3",
        state: "NY3",
        country: "USA3",
        zip_code: "10003",
        address: "3 John St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        city: "NYC4",
        state: "NY4",
        country: "USA4",
        zip_code: "10004",
        address: "4 John St",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("locations", null, {});
  },
};
