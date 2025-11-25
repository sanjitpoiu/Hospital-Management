// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./RegisterDoctor.module.css";

// const RegisterDoctor = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     specialization: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const response = await fetch("/api/register-doctor", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       alert("Registration successful");
//       navigate("/doctor-login");
//     } else {
//       alert(`Registration failed: ${data.message}`);
//     }
//   };

//   // Password validation function to check if password is strong
//   const isStrongPassword = (password) => {
//     return password.length >= 8; // Example: minimum 8 characters
//   };

//   return (
//     <div className={styles.registerContainer}>
//       <h2 className={styles.title}>Register as Doctor</h2>
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
//           type="text"
//           name="specialization"
//           placeholder="Specialization"
//           value={formData.specialization}
//           onChange={handleChange}
//           className={styles.input}
//         />
//         <button type="submit" className={styles.registerBtn}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default RegisterDoctor;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterDoctor.module.css";

const RegisterDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    experience: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch("/api/register-doctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful");
      navigate("/doctor-login");
    } else {
      alert(`Registration failed: ${data.message}`);
    }
  };

  // Password validation function to check if password is strong
  const isStrongPassword = (password) => {
    return password.length >= 8; // Example: minimum 8 characters
  };

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.title}>Register as Doctor</h2>
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
          type="text"
          name="specialization"
          placeholder="Specialization"
          value={formData.specialization}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={formData.experience}
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

export default RegisterDoctor;
