// const mongoose = require('mongoose');

// const doctorSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     specialization: { type: String, required: true },
//     isEmailVerified: { type: Boolean, default: false }
// });

// const Doctor = mongoose.model('Doctor', doctorSchema);

// module.exports = Doctor;




const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

// Define the schema separately
const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Make password required
    specialization: { type: String, required: true },
    experience: { type: Number, required: true }, // Added experience field
    age: { type: Number, required: true }, // Added age field
    gender: { type: String, required: true }, // Added gender field
    isEmailVerified: { type: Boolean, default: false }
});

// Method to generate JWT token
doctorSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id, email: this.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return token;
};

// Check if the model is already compiled
const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
