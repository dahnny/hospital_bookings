const express = require("express");
const upload = require("../helpers/multer");
const app = express.Router();

const { create, findByHospitalId } = require("../services/bookings.services");

app.post("/", async (req, res) => {
  try {
    const bookings = {
      ...req.body,
    }
    const data = await create(bookings);
    return res
      .status(200)
      .json({ message: "Booking Created Successfully", data });
  } catch (error) {
    console.log({ error });
    throw new Error({ error });
  }
});

app.get("/:hospitalId", async(req, res)=>{
    try {
        const data = await findByHospitalId(req.params.hospitalId);
        return res
        .status(200)
        .json({ message: "Retrieved booking Successfully", data });
    } catch (error) {
        console.log({ error });
        throw new Error({ error });
    }
})

module.exports = app;
