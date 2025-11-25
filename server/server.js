require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Import Routes
const doctorRoutes = require('./routes/doctors');
const doctorAuthRoutes = require('./routes/doctorAuthRoutes');
const patientRoutes = require('./routes/patients');
const patientAuthRoutes = require('./routes/patientAuthRoutes');
const otpRoutes = require('./routes/otp');
const appointmentRoutes = require('./routes/appointments');
const patientForgetPasswordRoutes = require('./routes/patientForgetPassword');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors({
    origin: 'https://hospital-management-frontend-9wt2.onrender.com', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
app.options('*', cors());

// Routes
app.use('/api', doctorRoutes);
app.use('/api', doctorAuthRoutes);
app.use('/api', patientRoutes);
app.use('/api', patientAuthRoutes);
app.use('/api', otpRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', patientForgetPasswordRoutes);
app.use('/api/payments', paymentRoutes);

// MongoDB connection
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch((error) => console.error('MongoDB connection error:', error.message));

app.get('/', (req, res) => {
    res.send('Hospital Management Backend is running.');
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
