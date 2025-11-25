// const mongoose = require('mongoose');

// const appointmentSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   date: { type: Date, required: true },
//   time: { type: String, required: true },
//   department: { type: String, required: true },
//   message: { type: String },
//   isPaid: {
//     type: Boolean,
//     default: false,
//   },
// });

// const Appointment = mongoose.model('Appointment', appointmentSchema);

// module.exports = Appointment;



const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  department: { type: String, required: true },
  message: { type: String },
  isPaid: {
    type: Boolean,
    default: false,
  },
  paymentDetails: {
    paymentId: { type: String }, // UPI payment ID
    transactionId: { type: String }, // UPI transaction ID
    status: { type: String, enum: ['PENDING', 'SUCCESS', 'FAILED'], default: 'PENDING' }, // Payment status
    amount: { type: Number }, // Payment amount
  },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
