require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/hospitals", require("./routes/hospital.routes"));

const port = process.env.PORT || 3264;
app.listen(port, async () => {
  console.log(`Server started on ${port}`);
});
