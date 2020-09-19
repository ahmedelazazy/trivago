var express = require("express");
var router = express.Router();

var controller = require("../controllers/hotelier");
const { validate } = require("../validators");
const { hotelierId } = require("../validators/hotelier");

router.get("/", controller.getAll);

router.get("/:id", hotelierId, validate, controller.getOne);

module.exports = router;
