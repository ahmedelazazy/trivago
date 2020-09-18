const { DataTypes } = require("sequelize");
const db = require("../config/db");

module.exports = db.define("hotelier", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
});
