require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// Import Routes
const doctorRoutes = require('./routes/doctors');
const doctorAuthRoutes = require('./routes/doctorauth');
const patientRoutes = require('./routes/patients');
const patientAuthRoutes = require('./routes/patientAuth');
const otpRoutes = require('./routes/otp');
const appointmentRoutes = require('./routes/appointments');
const patientForgetPasswordRoutes = require('./routes/patientForgetPassword');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// ------------------- CORS CONFIG -------------------
const corsOptions = {
  origin: 'https://hospital-management-frontend-9wt2.onrender.com', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable preflight requests

// ------------------- MIDDLEWARE -------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ------------------- ROUTES -------------------
app.use('/api', doctorRoutes);
app.use('/api', doctorAuthRoutes);
app.use('/api', patientRoutes);
app.use('/api', patientAuthRoutes);
app.use('/api', otpRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', patientForgetPasswordRoutes);
app.use('/api/payments', paymentRoutes);

// ------------------- MONGODB CONNECTION -------------------
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err.message));

// ------------------- START SERVER -------------------
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
