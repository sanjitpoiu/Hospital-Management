const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Patient = require('../models/patient'); // Patient model

// Register Patient
router.post('/register-patient', async (req, res) => {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const existingPatient = await Patient.findOne({ email });
        if (existingPatient) return res.status(400).json({ message: 'Email already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newPatient = new Patient({
            name,
            email,
            password: hashedPassword,
            phone
        });

        await newPatient.save();

        const token = jwt.sign({ id: newPatient._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ token, patient: { name, email, phone } });
    } catch (error) {
        console.error('Error registering patient:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Patient
router.post('/login-patient', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

    try {
        const patient = await Patient.findOne({ email });
        if (!patient) return res.status(400).json({ message: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        res.status(200).json({ token, patient: { name: patient.name, email: patient.email, phone: patient.phone } });
    } catch (error) {
        console.error('Error logging in patient:', error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
