const express = require("express");
const app = express.Router();

// models
const { getAll, getOne } = require("../services/hospital.services");

app.get("/", async (req, res) => {
  try {
    const data = await getAll();
    return res.status(200).json({ message: "Retrieved Successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const data = await getOne(req.params.id);
    return res.status(200).json({ message: "Retrieved Successfully", data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
});

module.exports = app;
