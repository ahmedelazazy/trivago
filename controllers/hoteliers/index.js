const Hotelier = require("../../models/Hotelier");
const HotelierItem = require("../../models/HotelierItem");
const { NotFound } = require("../../utils/errors");

const getAll = async (req, res, next) => {
  try {
    let hoteliers = await Hotelier.findAll();
    return res.json(hoteliers);
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    let dbResult = await Hotelier.findByPk(req.params.id, {
      include: [
        {
          model: HotelierItem,
          include: ["location"],
        },
      ],
    });

    if (!dbResult) {
      throw new NotFound("Hotelier not found");
    }

    return res.json(dbResult);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
};
