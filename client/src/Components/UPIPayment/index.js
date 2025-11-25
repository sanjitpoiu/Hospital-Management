

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import styles from './UPI.module.css'; // Importing CSS module

const UPIPayment = ({ onPaymentSuccess }) => {
    const [upiApp, setUpiApp] = useState('');
    const [upiId, setUpiId] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentLink, setPaymentLink] = useState('');
    const [showQRCode, setShowQRCode] = useState(false);
    const navigate = useNavigate();

    const handlePayment = async () => {
        if (!upiApp || !upiId || !amount) {
            alert('Please select a UPI app, enter your UPI ID, and amount.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/payments/initiate', {
                upiApp,
                upiId,
                amount,
            });

            setPaymentLink(response.data.paymentLink);
            setShowQRCode(true);

            toast.success('Payment initiated successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Redirect to the appointment form after a delay
            setTimeout(() => {
                navigate('/appointment');
            }, 5000); // Adjust delay as needed
        } catch (error) {
            console.error('Error initiating payment', error);
            toast.error('Failed to initiate payment. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleReceivePayment = async () => {
        if (!amount) {
            alert('Please enter the amount.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/api/payments/receive', {
                amount,
            });

            setPaymentLink(response.data.paymentLink);
            setShowQRCode(true);

            toast.success('Payment link generated successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            // Redirect to the appointment form after a delay
            setTimeout(() => {
                navigate('/appointment');
            }, 5000); // Adjust delay as needed
        } catch (error) {
            console.error('Error generating payment link', error);
            toast.error('Failed to generate payment link. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className={styles.container}>
            <h1>UPI Payment</h1>
            <div>
                <label className={styles.label}>
                    Select UPI App:
                    <select className={styles.select} value={upiApp} onChange={(e) => setUpiApp(e.target.value)}>
                        <option value="">Select</option>
                        <option value="PhonePe">PhonePe</option>
                        <option value="Paytm">Paytm</option>
                    </select>
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Enter UPI ID:
                    <input className={styles.input} type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                </label>
            </div>
            <div>
                <label className={styles.label}>
                    Enter Amount:
                    <input className={styles.input} type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </label>
            </div>
            <button className={styles.button} onClick={handlePayment}>Initiate Payment</button>
            <button className={styles.button} onClick={handleReceivePayment}>Generate Payment Link</button>

            {showQRCode && (
                <div className={styles.qrCodeContainer}>
                    <h2>Payment Link</h2>
                    <a className={styles.qrCodeLink} href={paymentLink} target="_blank" rel="noopener noreferrer">
                        {paymentLink}
                    </a>
                </div>
            )}
        </div>
    );
};

export default UPIPayment;
