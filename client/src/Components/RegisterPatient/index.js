import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterPatient.module.css";

const RegisterPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Password validation function
  const isStrongPassword = (password) => {
    // Minimum 8 characters, at least 1 number, 1 uppercase, 1 lowercase
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password confirmation check
    if (formData.password !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match" });
      return;
    }

    // Password strength check
    if (!isStrongPassword(formData.password)) {
      setMessage({
        type: "error",
        text:
          "Password must be at least 8 characters long and include uppercase, lowercase, and a number",
      });
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/register-patient`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text || "Backend did not return JSON" };
      }

      if (response.ok) {
        setMessage({ type: "success", text: "Registration successful!" });
        setTimeout(() => navigate("/patient-login"), 1500);
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage({
        type: "error",
        text: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Register as Patient</h2>

      {message.text && (
        <div
          className={
            message.type === "success"
              ? styles.successMessage
              : styles.errorMessage
          }
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`${styles.input} ${
            isStrongPassword(formData.password) ? styles.valid : styles.invalid
          }`}
          required
        />

        {!isStrongPassword(formData.password) && formData.password && (
          <div className={styles.passwordHint}>
            Password must be at least 8 characters and include uppercase,
            lowercase, and number.
          </div>
        )}

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={styles.input}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <button type="submit" className={styles.registerBtn}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPatient;
