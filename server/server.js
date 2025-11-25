// require('dotenv').config(); // Load environment variables from .env file

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const doctorRoutes = require('./routes/doctors');
// const doctorAuthRoutes = require('./routes/doctorauth'); // Import doctor auth routes
// const patientRoutes = require('./routes/patients');
// const patientAuthRoutes = require('./routes/patientAuth'); // Import patient auth routes
// const otpRoutes = require('./routes/otp');
// const appointmentRoutes = require('./routes/appointments');
// const patientForgetPasswordRoutes = require('./routes/patientForgetPassword');
// const paymentRoutes = require('./routes/paymentRoutes');
// const app = express();

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());




// // Routes
// app.use('/api', doctorRoutes);
// app.use('/api', doctorAuthRoutes); // Use doctorauth routes
// app.use('/api', patientRoutes); // Mount patient routes under /api
// app.use('/api', patientAuthRoutes); // Mount patient auth routes under /api
// app.use('/api', otpRoutes);
// app.use('/api', appointmentRoutes);
// app.use('/api', patientForgetPasswordRoutes);
// app.use('/api/payments', paymentRoutes);


// // MongoDB connection
// const CONNECTION_URL = process.env.MONGO_URI;
// const PORT = process.env.PORT || 8080;

// mongoose.connect(CONNECTION_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('MongoDB connected successfully');
// })
// .catch((error) => {
//     console.error('MongoDB connection error', error.message);
// });

// // Handle MongoDB connection events
// // mongoose.connection.on('connected', () => {
// //     console.log('MongoDB connected');
// // });

// // mongoose.connection.on('error', (err) => {
// //     console.error('MongoDB connection error:', err);
// // });

// // mongoose.connection.on('disconnected', () => {
// //     console.log('MongoDB disconnected');
// // });

// app.listen(PORT, () => {
//     console.log(`Server running on port: ${PORT}`);
// });










// // require('dotenv').config(); // Load environment variables from .env file

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const bodyParser = require('body-parser');
// // const session = require('express-session');
// // const passport = require('passport');

// // // Import Routes
// // const doctorRoutes = require('./routes/doctors');
// // const doctorAuthRoutes = require('./routes/doctorAuthRoutes'); // Updated import for doctor auth routes
// // const patientRoutes = require('./routes/patients');
// // const patientAuthRoutes = require('./routes/patientAuthRoutes'); // Updated import for patient auth routes
// // const otpRoutes = require('./routes/otp');
// // const appointmentRoutes = require('./routes/appointments');
// // const patientForgetPasswordRoutes = require('./routes/patientForgetPassword');

// // // Initialize Express App
// // const app = express();

// // // Middleware
// // app.use(bodyParser.json());
// // app.use(cors());

// // // Passport Configuration
// // require('./config/passport');

// // app.use(session({
// //     secret: 'secret',
// //     resave: false,
// //     saveUninitialized: false
// // }));
// // app.use(passport.initialize());
// // app.use(passport.session());

// // // Routes
// // app.use('/api', doctorRoutes);
// // app.use('/api', doctorAuthRoutes); // Use doctorAuthRoutes routes
// // app.use('/api', patientRoutes); // Mount patient routes under /api
// // app.use('/api', patientAuthRoutes); // Mount patientAuthRoutes routes under /api
// // app.use('/api', otpRoutes);
// // app.use('/api', appointmentRoutes);
// // app.use('/api', patientForgetPasswordRoutes);

// // // MongoDB connection
// // const CONNECTION_URL = process.env.MONGO_URI;
// // const PORT = process.env.PORT || 8080;

// // mongoose.connect(CONNECTION_URL, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => {
// //     console.log('MongoDB connected successfully');
// // })
// // .catch((error) => {
// //     console.error('MongoDB connection error', error.message);
// // });

// // // Handle MongoDB connection events
// // // mongoose.connection.on('connected', () => {
// // //     console.log('MongoDB connected');
// // // });

// // // mongoose.connection.on('error', (err) => {
// // //     console.error('MongoDB connection error:', err);
// // // });

// // // mongoose.connection.on('disconnected', () => {
// // //     console.log('MongoDB disconnected');
// // // });

// // app.listen(PORT, () => {
// //     console.log(`Server running on port: ${PORT}`);
// // });



require('dotenv').config(); // Load environment variables from .env file
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const doctorRoutes = require('./routes/doctors');
const doctorAuthRoutes = require('./routes/doctorauth'); // Import doctor auth routes
const patientRoutes = require('./routes/patients');
const patientAuthRoutes = require('./routes/patientAuth'); // Import patient auth routes
const otpRoutes = require('./routes/otp');
const appointmentRoutes = require('./routes/appointments');
const patientForgetPasswordRoutes = require('./routes/patientForgetPassword');
const paymentRoutes = require('./routes/paymentRoutes'); // Import payment routes 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api', doctorRoutes);
app.use('/api', doctorAuthRoutes); // Use doctorauth routes
app.use('/api', patientRoutes); // Mount patient routes under /api
app.use('/api', patientAuthRoutes); // Mount patient auth routes under /api
app.use('/api', otpRoutes);
app.use('/api', appointmentRoutes);
app.use('/api', patientForgetPasswordRoutes);
app.use('/api/payments', paymentRoutes); // Mount payment routes under /api/payments




// MongoDB connection
const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch((error) => {
    console.error('MongoDB connection error', error.message);
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
