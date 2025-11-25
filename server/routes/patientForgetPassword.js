

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const Patient = require('../models/patient'); // Assuming your Patient model is named patient.js
const { JWT_SECRET, EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// POST route for sending forgot password email
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    const patient = await Patient.findOne({ email });
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    const resetToken = jwt.sign({ id: patient._id }, JWT_SECRET, { expiresIn: '1h' });
    patient.resetPasswordToken = resetToken;
    patient.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await patient.save();

    const mailOptions = {
      to: patient.email,
      from: EMAIL_USER,
      subject: 'Reset Password Link',
      text: `Click the following link to reset your password:  ${process.env.FRONTEND_URL}/reset-password/${resetToken}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to send reset email' });
      }
      res.status(200).json({ message: 'Reset email sent successfully' });
    });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

// POST route for resetting password using token
router.post('/reset-password/:token', async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  console.log('Reset password request received:');
  console.log('Token:', token);
  console.log('New password:', newPassword);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Decoded token:', decoded);

    const patient = await Patient.findOneAndUpdate(
      { _id: decoded.id, resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } },
      { $set: { password: newPassword, resetPasswordToken: null, resetPasswordExpires: null } },
      { new: true }
    );

    if (!patient) {
      console.log('Invalid or expired token');
      return res.status(400).json({ message: 'Invalid or expired token' });
    }

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

module.exports = router;
