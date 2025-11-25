




const express = require('express');
const router = express.Router();
const { initiateUPIPayment, receivePayment, handleUPIPaymentCallback } = require('../controllers/paymentController');

router.post('/initiate', initiateUPIPayment);
router.post('/receive', receivePayment);
router.get('/callback', handleUPIPaymentCallback);

module.exports = router;
