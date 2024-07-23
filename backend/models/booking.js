const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  roomType: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Booking', bookingSchema);
