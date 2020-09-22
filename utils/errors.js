const { StatusCodes } = require("http-status-codes");

class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.status = StatusCodes.INTERNAL_SERVER_ERROR;
  }
}

class BadRequest extends GeneralError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.BAD_REQUEST;
  }
}
class NotFound extends GeneralError {
  constructor(message) {
    super(message);
    this.status = StatusCodes.NOT_FOUND;
  }
}

module.exports = {
  GeneralError,
  BadRequest,
  NotFound,
};
