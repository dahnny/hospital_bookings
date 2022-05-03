const Booking = require("../models/bookings.model");

const create = async (booking) => {
  try {
    const { hospitalId, name, email, phone, photo, illness } = booking;
    const newBooking = new Booking({
      name,
      email,
      phone,
      photo,
      illness,
      hospitalId,
    });
    await newBooking.save();
    return booking;
  } catch (error) {
    console.log({ error });
    throw new Error({ error });
  }
};

const findByHospitalId = async (hospitalId) => {
    try {
        const data = await Booking.find({ hospitalId });
        return data;
    } catch (error) {
        console.log({ error });
        throw new Error({ error });
    }
}

module.exports = {
    create,
    findByHospitalId
}
