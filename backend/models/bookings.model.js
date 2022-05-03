const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    photo: String,
    illness: String,
    hospitalId: String,
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;

