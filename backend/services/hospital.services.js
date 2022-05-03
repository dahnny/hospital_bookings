const hospitals = require("../models/hospital.model");

const getAll = async () => {
  try {
    return hospitals;
  } catch (error) {
    console.log({ error });
    throw new Error({ error });
  }
};

const getOne = async (id) => {
  try {
    return hospitals.find((hospital) => hospital.id === id);
  } catch (error) {
    console.log({ error });
    throw new Error({ error });
  }
};

module.exports = {
  getAll,
  getOne
};
