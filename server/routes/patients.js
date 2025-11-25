const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

// POST /api/register-patient
router.post('/register-patient', async (req, res) => {
  const { name, email, password, age, gender } = req.body;

  try {
    // Check if patient with given email already exists
    let existingPatient = await Patient.findOne({ email });

    if (existingPatient) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Create new patient record
    const newPatient = new Patient({
      name,
      email,
      password, // Hash password before saving in a real application
      age,
      gender,
    });

    await newPatient.save();

    res.status(201).json({ success: true });
  } catch (error) {
    console.error('Patient registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
