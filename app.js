require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("./config/morgan");
const helmet = require("helmet");
const cors = require("cors");
var addRequestId = require("express-request-id")();

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

app.use("/", indexRouter);

module.exports = app;
