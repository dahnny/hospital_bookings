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
app.use("/bookings", require("./routes/bookings.routes"));

app.use((req, res, next) => {
  const error = new Error("Not Found!");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error,
      },
    });
});

const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    console.log({ error });
    throw new Error(error);
  }
};

const port = process.env.PORT || 3264;
app.listen(port, async () => {
  await connectToDB();
  console.log(`Server started on ${port}`);
});
