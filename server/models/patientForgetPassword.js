const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

module.exports = mongoose.models.Patient || mongoose.model('Patient', patientSchema);

