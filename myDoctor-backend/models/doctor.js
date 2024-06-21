const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  status: { type: Boolean, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
