const { DataTypes } = require("sequelize");
const db = require("../config/db");

module.exports = db.define("location", {
  city: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  state: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  country: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      len: 5,
    },
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
