const { Sequelize, DataTypes } = require("sequelize");

const db = require("../config/db");
const categories = require("./Category");
const { ForbiddenWords, Reputation, Colors, Rating } = require("./Constants");

module.exports = db.define("hotelier_item", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notContains: ForbiddenWords,
      len: [10, 255],
    },
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: Rating.min,
      max: Rating.max,
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
      min: Reputation.min,
      max: Reputation.max,
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

      if (500 > reputationVal) return Colors.red;
      else if (799 > reputationVal) return Colors.yellow;
      else return Colors.green;
    },
  },
});
