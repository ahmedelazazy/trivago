const { param, body } = require("express-validator");

const Category = require("../models/Category");
const Hotelier = require("../models/Hotelier");
const HotelierItem = require("../models/HotelierItem");

const hotelierId = [param("id").notEmpty().isInt()];

const hotelierItem = [
  body("hotelierId")
    .notEmpty()
    .isInt()
    .custom((value) => {
      return Hotelier.findByPk(value).then((hotelier) => {
        if (!hotelier) {
          return Promise.reject("Invalid hotelierId");
        }
      });
    }),
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

const hotelierItemId = [
  param("id")
    .notEmpty()
    .isInt()
    .custom((value) => {
      return HotelierItem.findByPk(value).then((item) => {
        if (!item) {
          return Promise.reject("Invalid hotelierItemId");
        }
      });
    }),
];

module.exports = {
  hotelierId,
  hotelierItem,
  hotelierItemId,
};
