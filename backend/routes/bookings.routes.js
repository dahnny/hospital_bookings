const express = require("express");
const upload = require("../helpers/multer");
const app = express.Router();

const { create, findByHospitalId } = require("../services/bookings.services");

app.post("/", async (req, res) => {
  try {
    const photo =
      "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
    const bookings = {
      ...req.body,
      photo,
    };
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
