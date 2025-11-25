
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./DoctorLogin.module.css";

const DoctorLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth/doctor";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.token);
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
        window.location = "/doctor-dashboard";
      }, 3000);
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
      <ToastContainer />
      <div className={styles.loginFormContainer}>
        <div className={styles.left}>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <h1>Login as doctor</h1>
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
          </form>
          <Link to="/forgot-password" className={styles.forgotPasswordLink}>
              Forgot Password?
            </Link> 
          <Link to="/otp">
            <button type="button" className={styles.whiteBtn}>
              Login with OTP
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default DoctorLogin;
