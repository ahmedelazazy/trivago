const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // console.log(errors);
  return res.sendStatus(400);
};

module.exports = {
  validate,
};
