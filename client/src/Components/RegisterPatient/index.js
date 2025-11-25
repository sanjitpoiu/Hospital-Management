// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./RegisterPatient.module.css";

// const RegisterPatient = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     age: "",
//     gender: "",
//   });
//   const [isEmailVerified, setIsEmailVerified] = useState(false);
//   const [registrationMessage, setRegistrationMessage] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Send registration data to the backend
//     const response = await fetch("/api/register-patient", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Registration successful");
//       navigate("/patient-login");
//     } else {
//       alert(`Registration failed: ${data.message}`);
//     }
//   };

//   // Password validation function to check if password is strong
//   const isStrongPassword = (password) => {
//     // Add your password validation logic here (e.g., minimum length, complexity requirements)
//     return password.length >= 8; // Example: minimum 8 characters
//   };

//   return (
//     <div className={styles.registerContainer}>
//       <h2 className={styles.title}>Register as Patient</h2>
//       {registrationMessage && <div className={styles.successMessage}>{registrationMessage}</div>}
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={formData.name}
//           onChange={handleChange}
//           className={styles.input}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={handleChange}
//           className={styles.input}
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           className={`${styles.input} ${isStrongPassword(formData.password) ? styles.valid : styles.invalid}`}
//         />
//         {!isStrongPassword(formData.password) && (
//           <div className={styles.passwordHint}>
//             Password must be at least 8 characters long.
//           </div>
//         )}
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           className={styles.input}
//         />
//         <input
//           type="number"
//           name="age"
//           placeholder="Age"
//           value={formData.age}
//           onChange={handleChange}
//           className={styles.input}
//         />
//         <select
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className={styles.input}
//         >
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//         <button type="submit" className={styles.registerBtn}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPatient;


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
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [registrationMessage, setRegistrationMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send registration data to the backend
    const response = await fetch("/api/register-patient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful");
      navigate("/patient-login");
    } else {
      alert(`Registration failed: ${data.message}`);
    }
  };

  // Password validation function to check if password is strong
  const isStrongPassword = (password) => {
    // Add your password validation logic here (e.g., minimum length, complexity requirements)
    return password.length >= 8; // Example: minimum 8 characters
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Register as Patient</h2>
      {registrationMessage && <div className={styles.successMessage}>{registrationMessage}</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className={`${styles.input} ${isStrongPassword(formData.password) ? styles.valid : styles.invalid}`}
        />
        {!isStrongPassword(formData.password) && (
          <div className={styles.passwordHint}>
            Password must be at least 8 characters long.
          </div>
        )}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className={styles.input}
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={styles.input}
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
