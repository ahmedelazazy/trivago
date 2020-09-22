const { param } = require("express-validator");

const hotelierId = [param("id").notEmpty().isInt()];

module.exports = {
  hotelierId,
};
