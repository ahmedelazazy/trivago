const express = require("express");
const router = express.Router();

const hotelierRouter = require("./hoteliers");
const hotelierItemRouter = require("./hoteliers/items");

router.use("/hoteliers", hotelierRouter);
router.use("/hoteliers/items", hotelierItemRouter);

router.get("/status", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
