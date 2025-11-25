// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./Dashboard.module.css";
// import background from "../../assets/photo22.avif"; 
// const DashboardPatient = () => {
//   const navigate = useNavigate();

//   const handleAppointmentClick = () => {
//     // Redirect to the appointment page
//     navigate('/upi'); // Update with the correct route for your appointment page
//   };

//   return (
//     <div className={styles.dashboardContainer} style={{ backgroundImage: `url(${background})` }}>
//       <header className={styles.heroSection}>
//         <div className={styles.heroContent}>
//           <h1>Welcome to Our Hospital</h1>
//           <p>Providing exceptional healthcare with compassion and care</p>
//           <button className={styles.ctaButton} onClick={handleAppointmentClick}>Make an Appointment</button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default DashboardPatient;



import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";
import background from "../../assets/photo22.avif"; 

const DashboardPatient = () => {
  const navigate = useNavigate();
  const patientName = localStorage.getItem("patientName");

  const handleAppointmentClick = () => {
    // Redirect to the appointment page
    navigate('/upi'); // Update with the correct route for your appointment page
  };

  return (
    <div className={styles.dashboardContainer} style={{ backgroundImage: `url(${background})` }}>
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Hospital</h1>
          <p>Providing exceptional healthcare with compassion and care</p>
          {patientName && (
            <p>Logged in as: {patientName}</p>
          )}
          <button className={styles.ctaButton} onClick={handleAppointmentClick}>Make an Appointment</button>
        </div>
      </header>
    </div>
  );
};

export default DashboardPatient;
