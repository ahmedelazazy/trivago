class GeneralError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.status = 500;
  }
}

class BadRequest extends GeneralError {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class NotFound extends GeneralError {
  constructor(message) {
    super(message);
    this.status = 404;
  }
}

module.exports = {
  GeneralError,
  BadRequest,
  NotFound,
};
