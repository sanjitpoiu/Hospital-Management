

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./OTPCSS.module.css";  // Assuming you have an OTP styles file

const OTPForm = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state
    const [step, setStep] = useState(1);
    const [userType, setUserType] = useState(""); // Add userType state
    const navigate = useNavigate();

    const handleChange = (e) => {
        if (step === 1) {
            setEmail(e.target.value);
        } else {
            setOtp(e.target.value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading state to true
        try {
            if (step === 1) {
                const url = "http://localhost:8080/api/otp/request-otp"; // Ensure this matches the route
                const { data: res } = await axios.post(url, { email });
                setUserType(res.userType); // Set userType from the response
                setStep(2);
            } else {
                const url = "http://localhost:8080/api/otp/verify-otp"; // Ensure this matches the route
                const { data: res } = await axios.post(url, { email, otp });
                localStorage.setItem("token", res.token);

                // Navigate to respective dashboard based on userType 
                if (userType === 'Doctor') {
                    navigate("/doctor-dashboard");
                } else {
                    navigate("/patient-dashboard");
                }
            }
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            }
        } finally {
            setLoading(false); // Reset loading state after API request
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1>{step === 1 ? "Request OTP" : "Verify OTP"}</h1>
                {step === 1 && (
                    <input
                        type="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={email}
                        required
                        className={styles.input}
                    />
                )}
                {step === 2 && (
                    <input
                        type="text"
                        placeholder="OTP"
                        onChange={handleChange}
                        value={otp}
                        required
                        className={styles.input}
                    />
                )}
                {error && <div className={styles.error}>{error}</div>}
                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? "Loading..." : (step === 1 ? "Send OTP" : "Verify OTP")}
                </button>
            </form>
        </div>
    );
};

export default OTPForm;
