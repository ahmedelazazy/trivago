const express = require("express");
const router = express.Router();

const hotelierRouter = require("./hotelier");
const hotelierItemRouter = require("./hotelierItem");

router.use("/hotelier", hotelierRouter);
router.use("/hotelier-item", hotelierItemRouter);

router.get("/", (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
