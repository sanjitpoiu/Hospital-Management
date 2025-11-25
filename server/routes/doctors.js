// const express = require('express');
// const bcrypt = require('bcryptjs');
// const Doctor = require('../models/doctor');

// const router = express.Router();

// // Register new doctor
// router.post('/register-doctor', async (req, res) => {
//     const { name, email, password, confirmPassword, specialization } = req.body;

//     if (password !== confirmPassword) {
//         return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     try {
//         const existingDoctor = await Doctor.findOne({ email });
//         if (existingDoctor) return res.status(400).json({ message: 'Doctor already exists' });

//         const hashedPassword = await bcrypt.hash(password, 12);

//         const result = await Doctor.create({
//             name,
//             email,
//             password: hashedPassword,
//             specialization,
//             isEmailVerified: false
//         });

//         res.status(201).json({ message: 'Doctor registered successfully', doctor: result });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong', error: error.message });
//     }
// });

// // Verify email (dummy endpoint for simulation)
// router.post('/verify-email', async (req, res) => {
//     const { email } = req.body;

//     try {
//         const doctor = await Doctor.findOne({ email });
//         if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

//         doctor.isEmailVerified = true;
//         await doctor.save();

//         res.status(200).json({ message: 'Email verified successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Something went wrong', error: error.message });
//     }
// });

// module.exports = router;



const express = require('express');
const bcrypt = require('bcryptjs');
const Doctor = require('../models/doctor');

const router = express.Router();

// Register new doctor
router.post('/register-doctor', async (req, res) => {
    const { name, email, password, confirmPassword, specialization, experience, age, gender } = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) return res.status(400).json({ message: 'Doctor already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Doctor.create({
            name,
            email,
            password: hashedPassword,
            specialization,
            experience,
            age,
            gender,
            isEmailVerified: false
        });

        res.status(201).json({ message: 'Doctor registered successfully', doctor: result });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

// Verify email (dummy endpoint for simulation)
router.post('/verify-email', async (req, res) => {
    const { email } = req.body;

    try {
        const doctor = await Doctor.findOne({ email });
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

        doctor.isEmailVerified = true;
        await doctor.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
});

module.exports = router;
