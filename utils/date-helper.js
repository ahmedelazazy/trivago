const { request } = require("express");

const moment = require("moment");

const now = () => {
  return moment().format("YYYY-MM-DD HH:mm:ss");
};

const dateFormat = "dd-mm-yyyy HH:MM:ss";

module.exports = { now, dateFormat };
