import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordPage = () => {
  const { token } = useParams(); // Retrieve token from URL params
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/api/reset-password/${token}`, { newPassword });
      setMessage(response.data.message);
      if (response.status === 200) {
        setTimeout(() => navigate('/login'), 3000); // Redirect to login page after successful password reset
      }
    } catch (error) {
      console.error('Error resetting password:', error); // Log the error details
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <label htmlFor="newPassword">New Password:</label>
      <input
        type="password"
        id="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <button onClick={handleResetPassword}>Reset Password</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPasswordPage;
