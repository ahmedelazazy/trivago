var express = require("express");
var router = express.Router();

var controller = require("../../controllers/hoteliers");
const { validate } = require("../../validators");
const { hotelierId } = require("../../validators/hoteliers");

router.get("/", controller.getAll);

router.get("/:id", hotelierId, validate, controller.getOne);

module.exports = router;
