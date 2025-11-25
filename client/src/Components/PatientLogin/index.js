
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PatientLogin.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PatientLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth/patient";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => { 
        // navigate("/dashboard-patient"); // Navigate to dashboard after successful login
        window.location = "/patient-dashboard";
      }, 3000); // Delay for 3 seconds before navigating
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <div className={styles.left}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h1>Login as Patient</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.errorMsg}>{error}</div>}
            <button type="submit" className={styles.greenBtn}>
              Sign In
            </button>
            <Link to="/forgot-password" className={styles.forgotPasswordLink}>
              Forgot Password?
            </Link> 
          </form>
          <Link to="/otp">
            <button type="button" className={styles.whiteBtn}>
              Login with OTP
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PatientLogin;
