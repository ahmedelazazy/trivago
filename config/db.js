const { Sequelize } = require("sequelize");

let db = null;

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") {
  db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: process.env.DB_LOGGING === "true" ? console.log : null,
  });
} else if (process.env.NODE_ENV === "test") {
  db = new Sequelize("sqlite::memory:", {
    logging: null,
  });
}

module.exports = db;
