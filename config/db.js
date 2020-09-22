const { Sequelize } = require("sequelize");

let db = null;

if ("development" === process.env.NODE_ENV || "production" === process.env.NODE_ENV) {
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
    logging: "true" === process.env.DB_LOGGING ? console.log : null,
  });
} else if ("test" === process.env.NODE_ENV) {
  db = new Sequelize("sqlite::memory:", {
    logging: null,
  });
}

module.exports = db;
