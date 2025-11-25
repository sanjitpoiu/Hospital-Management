const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Patient = require('../models/patient');
const { JWT_SECRET } = process.env;

// Login patient
router.post('/auth/patient', async (req, res) => {
    const { email, password } = req.body;

    try {
        const patient = await Patient.findOne({ email });
        if (!patient) {
            console.log('Patient not found');
            return res.status(400).json({ message: 'Patient not found' });
        }

        console.log('Entered Password:', password); // Log the entered password
        console.log('Stored Password:', patient.password); // Log the stored plaintext password (not recommended)

        // Directly compare plaintext passwords (not recommended)
        if (password !== patient.password) {
            console.log('Invalid credentials');
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If login successful
        const token = jwt.sign({ id: patient._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token }); // Include success message and token
    } catch (error) {
        console.log('Error:', error.message);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

module.exports = router;
