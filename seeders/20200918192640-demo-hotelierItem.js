module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("hotelier_items", [
      {
        name: "Hilton NYC",
        rating: "4",
        category: "hotel",
        image: "https://images.unsplash.com/photo-1570054417025-2fa787c4c8f6?fit=crop&w=400&q=80",
        reputation: 900,
        price: 100,
        availability: 10,
        hotelierId: 1,
        locationId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Mariot NYC",
        rating: "3",
        category: "hotel",
        image: "https://images.unsplash.com/photo-1560067174-c5a3a8f37060?fit=crop&w=400&q=80",
        reputation: 700,
        availability: 5,
        price: 150,
        hotelierId: 2,
        locationId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ibis NYC",
        rating: "3",
        category: "hostel",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?fit=crop&w=400&q=80",
        reputation: 500,
        availability: 20,
        price: 25,
        hotelierId: 3,
        locationId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hitlon Guest house NYC",
        rating: "4",
        category: "guest-house",
        image: "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?fit=crop&w=400&q=80",
        reputation: 900,
        availability: 2,
        price: 40,
        hotelierId: 1,
        locationId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("hotelier_items", null, {});
  },
};
