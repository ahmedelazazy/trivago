require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("./config/morgan");
const helmet = require("helmet");
const cors = require("cors");
const addRequestId = require("express-request-id")();

const db = require("./config/db");
const models = require("./models");

const logger = require("./config/winston");
const indexRouter = require("./routes/index");

const app = express();

app.set("trust proxy", true);
app.use(cors());
app.use(helmet());
app.use(addRequestId);
app.use(morgan);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

app.use("/", indexRouter);

if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "production") {
  if (process.env.DB_SYNC === "true") {
    db.sync({ alter: true })
      .then(() => logger.info("DB Synced"))
      .catch((error) => logger.error(error));
  }
  db.authenticate()
    .then(() => logger.info("Connection has been established successfully."))
    .catch((error) => logger.error(error));
}

module.exports = app;
