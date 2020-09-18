const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const { now } = require("../utils/date-helper");

const morganLogStream = fs.createWriteStream(path.join(__dirname, "../logs/morgan.log"), { flags: "a" });

morgan.token("id", (req) => {
  return req.id;
});

morgan.token("now", (req) => {
  return now();
});

module.exports = morgan(`[:id] [:remote-addr] [:remote-user] [:now] [:method] [:url] [:status] [:res[content-length]] [:referrer] [:user-agent]`, { stream: morganLogStream });
