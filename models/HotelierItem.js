const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");
const categories = require("./Category");
const Location = require("./Location");

module.exports = db.define("hotelier_item", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notContains: ["Free", "Offer", "Book", "Website"],
      len: [10, 255],
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  category: {
    type: DataTypes.ENUM(categories),
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isUrl: true,
    },
  },
  reputation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
      max: 1000,
    },
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  availability: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  reputationBadge: {
    type: Sequelize.VIRTUAL,
    get() {
      let reputationVal = this.getDataValue("reputation");

      if (reputationVal <= 500) return "red";
      else if (reputationVal <= 799) return "yellow";
      else return "green";
    },
  },
});
