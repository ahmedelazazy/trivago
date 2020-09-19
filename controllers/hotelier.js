const Hotelier = require("../models/Hotelier");
const logger = require("../config/winston");
const HotelierItem = require("../models/HotelierItem");

const getAll = async (req, res) => {
  try {
    let dbResult = await Hotelier.findAll();
    return res.json(dbResult);
  } catch (error) {
    logger.error(error.message || error);
    return res.sendStatus(406);
  }
};

const getOne = async (req, res) => {
  try {
    let dbResult = await Hotelier.findByPk(req.params.id, {
      include: [
        {
          model: HotelierItem,
          include: ["location"],
        },
      ],
    });

    if (!dbResult) return res.sendStatus(404);

    return res.json(dbResult);
  } catch (error) {
    logger.error(error.message || error);
    return res.sendStatus(406);
  }
};

module.exports = {
  getAll,
  getOne,
};
