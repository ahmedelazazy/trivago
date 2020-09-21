const logger = require("../config/winston");
const HotelierItem = require("../models/HotelierItem");
const Location = require("../models/Location");

const getOne = async (req, res) => {
  try {
    let dbResult = await HotelierItem.findByPk(req.params.id, { include: ["location", "hotelier"] });

    if (!dbResult) return res.sendStatus(404);
    return res.json(dbResult);
  } catch (error) {
    logger.error(error.message || error);

    return res.sendStatus(406);
  }
};

const add = async (req, res) => {
  try {
    const item = {
      name: req.body.name,
      rating: req.body.rating,
      category: req.body.category,
      image: req.body.image,
      reputation: req.body.reputation,
      price: req.body.price,
      availability: req.body.availability,
      hotelierId: req.body.hotelierId,
      location: {
        city: req.body.location.city,
        state: req.body.location.state,
        country: req.body.location.country,
        zip_code: req.body.location.zip_code,
        address: req.body.location.address,
      },
    };

    const addedItem = await HotelierItem.create(item, { include: [Location] });

    return res.sendStatus(201);
  } catch (error) {
    logger.error(error.message || error);

    return res.sendStatus(406);
  }
};

const modify = async (req, res) => {
  try {
    const item = {
      name: req.body.name,
      rating: req.body.rating,
      category: req.body.category,
      image: req.body.image,
      reputation: req.body.reputation,
      price: req.body.price,
      availability: req.body.availability,
      hotelierId: req.body.hotelierId,
    };
    const location = {
      city: req.body.location.city,
      state: req.body.location.state,
      country: req.body.location.country,
      zip_code: req.body.location.zip_code,
      address: req.body.location.address,
    };
    const dbItem = await HotelierItem.findByPk(req.params.id, { include: [Location] });
    const dbLocation = await Location.findByPk(dbItem.location.id);

    dbLocation.set(location);
    await dbLocation.save();

    dbItem.set(item);
    await dbItem.save();

    return res.sendStatus(200);
  } catch (error) {
    logger.error(error.message || error);
    return res.sendStatus(406);
  }
};

const remove = async (req, res) => {
  try {
    const dbItem = await HotelierItem.findByPk(req.params.id, { include: [Location] });
    await dbItem.destroy();

    return res.sendStatus(200);
  } catch (error) {
    logger.error(error.message || error);
    return res.sendStatus(406);
  }
};

const book = async (req, res) => {
  try {
    const dbItem = await HotelierItem.findByPk(req.params.id);

    if (dbItem.availability <= 0) return res.sendStatus(400);

    dbItem.availability -= 1;
    await dbItem.save({ fields: ["availability"] });

    return res.sendStatus(200);
  } catch (error) {
    logger.error(error.message || error);
    return res.sendStatus(406);
  }
};

module.exports = {
  getOne,
  add,
  modify,
  remove,
  book,
};
