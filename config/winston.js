const winston = require("winston");

const config = {
  transports: [new winston.transports.File({ filename: "./logs/app.log" }), new winston.transports.Console({ level: "error" })],
};

const logger = winston.createLogger(config);

module.exports = logger;
