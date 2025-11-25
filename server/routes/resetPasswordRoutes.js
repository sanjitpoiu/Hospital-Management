// routes/resetPasswordRoutes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/patient');

// Load User model// Adjust the path as per your project structure

// @route   POST /api/forgot-password
// @desc    Initiate password reset (Send reset link or OTP)
// @access  Public
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Generate token and send reset link (or OTP) to user's email
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Adjust token expiration as needed
        });

        // Here you would typically send an email with the reset link containing the token
        // For demonstration, let's assume sending email is handled separately

        res.json({ message: 'Password reset link sent successfully' });
    } catch (error) {
        console.error('Error initiating password reset:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/reset-password/:token
// @desc    Reset password using token
// @access  Public
router.post('/reset-password/:token', async (req, res) => {
    const { newPassword } = req.body;
    const { token } = req.params;

    try {
        // Decode token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded.userId) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password in the database
        const updatedUser = await User.findByIdAndUpdate(decoded.userId, {
            password: hashedPassword
        });

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.error('Error resetting password:', error);
        if (error.name === 'TokenExpiredError') {
            return res.status(400).json({ message: 'Token expired' });
        }
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
