const { StatusCodes } = require("http-status-codes");

const HotelierItem = require("../../models/HotelierItem");
const Location = require("../../models/Location");
const { NotFound, BadRequest } = require("../../utils/errors");

const getOne = async (req, res, next) => {
  try {
    let dbResult = await HotelierItem.findByPk(req.params.id, { include: ["location", "hotelier"] });

    if (!dbResult) {
      throw new NotFound("Hotelier item not found");
    }
    return res.json(dbResult);
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
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

    return res.status(StatusCodes.CREATED).json({
      id: addedItem.dataValues.id,
    });
  } catch (error) {
    next(error);
  }
};

const modify = async (req, res, next) => {
  try {
    let dbResult = await HotelierItem.findByPk(req.params.id);

    if (!dbResult) {
      throw new NotFound("Hotelier item not found");
    }

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

    return res.json({
      id: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};

const remove = async (req, res, next) => {
  try {
    const dbItem = await HotelierItem.findByPk(req.params.id, { include: [Location] });

    if (!dbItem) {
      throw new NotFound("Hotelier item not found");
    }

    await dbItem.destroy();

    return res.json({
      id: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};

const book = async (req, res, next) => {
  try {
    const dbItem = await HotelierItem.findByPk(req.params.id);

    if (!dbItem) {
      throw new NotFound("Hotelier item not found");
    }

    if (dbItem.availability <= 0) {
      throw new BadRequest("No availability");
    }

    dbItem.availability -= 1;
    await dbItem.save({ fields: ["availability"] });

    return res.json({
      id: req.params.id,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOne,
  add,
  modify,
  remove,
  book,
};
