const { param, body } = require("express-validator");

const Category = require("../../models/Category");

const hotelierId = [param("id").notEmpty().isInt()];

const hotelierItem = [
  body("hotelierId").notEmpty().isInt(),
  body("name").notEmpty().isLength({ min: 10, max: 255 }).not().isIn(["Free", "Offer", "Book", "Website"]),
  body("rating").notEmpty().isInt({ min: 0, max: 5 }),
  body("category").notEmpty().isIn(Category),
  body("image").notEmpty().isURL(),
  body("reputation").notEmpty().isInt({ min: 0, max: 1000 }),
  body("price").notEmpty().isInt({ min: 0 }),
  body("availability").notEmpty().isInt({ min: 0 }),
  body("location.city").notEmpty(),
  body("location.state").notEmpty(),
  body("location.country").notEmpty(),
  body("location.zip_code").notEmpty().isInt({ min: 0 }).isLength({ min: 5, max: 5 }),
  body("location.address").notEmpty(),
];

const hotelierItemId = [param("id").notEmpty().isInt()];

module.exports = {
  hotelierId,
  hotelierItem,
  hotelierItemId,
};
