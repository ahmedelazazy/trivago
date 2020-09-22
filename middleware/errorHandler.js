const logger = require("../config/winston");

const notFound = (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
};

const catchAll = (error, req, res, next) => {
  logger.error(error.message || error);
  res.status(error.status || 500);
  return res.json({
    statusCode: error.status || 500,
    error: error.message || error,
  });
};

module.exports = {
  notFound,
  catchAll,
};
