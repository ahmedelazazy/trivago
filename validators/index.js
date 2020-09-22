const { validationResult } = require("express-validator");

const { BadRequest } = require("../utils/errors");

const validate = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    } else {
      const extractedErrors = [];
      errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

      throw new BadRequest(extractedErrors);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validate,
};
