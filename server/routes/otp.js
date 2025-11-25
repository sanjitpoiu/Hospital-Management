const express = require('express');
const router = express.Router();
const OTP = require('../models/otp');
const Patient = require('../models/patient'); // Adjust based on your Patient model path
const Doctor = require('../models/doctor'); // Adjust based on your Doctor model path
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { JWT_SECRET, EMAIL_USER, EMAIL_PASS } = process.env;

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

// Generate OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
};

// Request OTP
router.post('/otp/request-otp', async (req, res) => {
  const { email } = req.body;

  try {
    const doctor = await Doctor.findOne({ email });
    const patient = await Patient.findOne({ email });

    if (!doctor && !patient) {
      return res.status(400).json({ message: 'User not found' });
    }

    const userType = doctor ? 'Doctor' : 'Patient';
    const otp = generateOTP();
    await OTP.create({ email, otp });

    // Send OTP via email
    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send OTP', error: error.message });
      }
      res.status(200).json({ message: 'OTP sent successfully', userType });
    });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

// Verify OTP
router.post('/otp/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const otpRecord = await OTP.findOne({ email, otp });
    if (!otpRecord) return res.status(400).json({ message: 'Invalid OTP' });

    // Check if OTP is expired
    if (new Date() > new Date(otpRecord.createdAt.getTime() + 5 * 60000)) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    const doctor = await Doctor.findOne({ email });
    const patient = await Patient.findOne({ email });

    const user = doctor || patient;
    const userType = doctor ? 'Doctor' : 'Patient';
    const token = jwt.sign({ id: user._id, userType }, JWT_SECRET, { expiresIn: '1h' });

    // Delete OTP after successful verification
    await OTP.deleteOne({ email, otp });

    res.status(200).json({ message: 'OTP verified successfully', token, userType });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

module.exports = router;
