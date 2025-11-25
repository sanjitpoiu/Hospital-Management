import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("patient");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/auth/${userType}`;
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
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
            <h1>Login to Your Account</h1>
            <div className={styles.userTypeContainer}>
              <Link to="/patient-login">
                <button
                  type="button"
                  className={`${styles.userTypeBtn} ${userType === "patient" ? styles.active : ""}`}
                  onClick={() => handleUserTypeChange("patient")}
                >
                  Sign in as Patient
                </button>
              </Link>
              <Link to="/doctor-login">
                <button
                  type="button"
                  className={`${styles.userTypeBtn} ${userType === "doctor" ? styles.active : ""}`}
                  onClick={() => handleUserTypeChange("doctor")}
                >
                  Sign in as Doctor
                </button>
              </Link>
            </div>
            {/* <input
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
            </button> */}
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here?</h1>
          <div className={styles.dropdown}>
            <button className={styles.dropdownBtn}>Register</button>
            <div className={styles.dropdownContent}>
              <Link to="/register-patient">Register as Patient</Link>
              <Link to="/register-doctor">Register as Doctor</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
