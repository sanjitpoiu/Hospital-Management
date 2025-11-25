const express = require('express');
const axios = require('axios');
const router = express.Router();

// Initiate UPI Payment
const initiateUPIPayment = async (req, res) => {
    const { upiApp, upiId, amount } = req.body;

    try {
        const response = await axios.post('https://api.razorpay.com/v1/payment_links', {
            amount: amount * 100,
            currency: 'INR',
            accept_partial: false,
            customer: {
                name: 'Customer Name',
                contact: '9123456789',
                email: 'customer@example.com'
            },
            notify: {
                sms: true,
                email: true
            },
            reminder_enable: true,
            notes: {
                upiApp,
                upiId
            },
            callback_url: 'http://localhost:8080/api/payments/callback',
            callback_method: 'get'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString('base64')}`
            }
        });

        res.status(200).json({
            paymentLink: response.data.short_url,
            message: 'Payment initiated successfully',
        });
    } catch (error) {
        console.error('Error initiating payment:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to initiate payment', details: error.response ? error.response.data : error.message });
    }
};

// Receive Payment
const receivePayment = async (req, res) => {
    const { amount } = req.body;
    const upiId = '6203702021@jupiteraxis';

    try {
        const response = await axios.post('https://api.razorpay.com/v1/payment_links', {
            amount: amount * 100,
            currency: 'INR',
            accept_partial: false,
            customer: {
                name: 'Customer Name',
                contact: '9123456789',
                email: 'customer@example.com'
            },
            notify: {
                sms: true,
                email: true
            },
            reminder_enable: true,
            notes: {
                upiApp: 'Paytm',
                upiId
            },
            callback_url: process.env.PAYMENT_CALLBACK_URL,
            callback_method: 'get'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(`${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`).toString('base64')}`
            }
        });

        res.status(200).json({
            paymentLink: response.data.short_url,
            message: 'Payment link generated successfully',
        });
    } catch (error) {
        console.error('Error generating payment link:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate payment link', details: error.response ? error.response.data : error.message });
    }
};

// Handle UPI Payment Callback
const handleUPIPaymentCallback = (req, res) => {
    const { razorpay_payment_link_status } = req.query;

    if (razorpay_payment_link_status === 'paid') {
        res.redirect('http://localhost:3000/appointment'); // Ensure this URL matches your frontend URL
    } else {
        res.status(400).json({ error: 'Payment failed' });
    }
};

module.exports = {
    initiateUPIPayment,
    receivePayment,
    handleUPIPaymentCallback,
};
