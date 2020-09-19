var express = require("express");
var router = express.Router();

var controller = require("../controllers/hotelierItem");
const { validate } = require("../validators");
const { hotelierId, hotelierItem, hotelierItemId } = require("../validators/hotelierItem");

router.get("/:id", hotelierId, validate, controller.getOne);

router.post("/", hotelierItem, validate, controller.add);

router.put("/:id", [...hotelierItemId, ...hotelierItem], validate, controller.modify);

router.delete("/:id", hotelierItemId, validate, controller.remove);

router.put("/book/:id", hotelierItemId, validate, controller.book);

module.exports = router;
