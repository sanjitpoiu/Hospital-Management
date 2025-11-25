
// import React, { useState, useEffect } from "react";
// import styles from "./Dashboard.module.css";
// import background from "../../assets/photo.jpg"; // Make sure the path to your photo.jpg is correct

// const DashboardDoctor = () => {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const [showAppointments, setShowAppointments] = useState(false);

//   const fetchAppointments = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/");
//       const data = await response.json();
//       setAppointments(data);
//     } catch (error) {
//       console.error("Error fetching appointments", error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`http://localhost:8080/api/${id}`, {
//         method: "DELETE",
//       });
//       setAppointments(appointments.filter((appointment) => appointment._id !== id));
//     } catch (error) {
//       console.error("Error deleting appointment", error);
//     }
//   };

//   const handleViewAppointment = (appointment) => {
//     setSelectedAppointment(appointment);
//   };

//   const handleBackToList = () => {
//     setSelectedAppointment(null);
//   };

//   useEffect(() => {
//     fetchAppointments();
//   }, []);

//   const handleToggleAppointments = () => {
//     setShowAppointments(!showAppointments);
//   };

//   return (
//     <div className={styles.dashboardContainer} style={{ backgroundImage: `url(${background})` }}>
//       <h1>Doctor Dashboard</h1>
//       <button onClick={handleToggleAppointments} className={styles.viewButton}>
//         {showAppointments ? "Close Appointments" : "View Appointments"}
//       </button>
//       {showAppointments && !selectedAppointment ? (
//         <div className={styles.appointmentList}>
//           <h2>Appointments</h2>
//           <ul>
//             {appointments.map((appointment, index) => (
//               <li key={index} className={styles.appointmentItem}>
//                 <p>
//                   <strong>Name:</strong> {appointment.name}
//                 </p>
//                 <button onClick={() => handleViewAppointment(appointment)} className={styles.viewButton}>
//                   View Appointment
//                 </button>
//                 <button onClick={() => handleDelete(appointment._id)} className={styles.deleteButton}>
//                   Delete Appointment
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : showAppointments && selectedAppointment ? (
//         <div className={styles.appointmentDetails}>
//           <h2>Appointment Details</h2>
//           <p><strong>Name:</strong> {selectedAppointment.name}</p>
//           <p><strong>Email:</strong> {selectedAppointment.email}</p>
//           <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
//           <p><strong>Date:</strong> {selectedAppointment.date}</p>
//           <p><strong>Time:</strong> {selectedAppointment.time}</p>
//           <p><strong>Department:</strong> {selectedAppointment.department}</p>
//           <p><strong>Message:</strong> {selectedAppointment.message}</p>
//           <button onClick={handleBackToList} className={styles.backButton}>
//             Back to List
//           </button>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default DashboardDoctor;



import React, { useState, useEffect } from "react";
import styles from "./Dashboard.module.css";
import background from "../../assets/photo23.avif"; // Make sure the path to your photo.jpg is correct

const DashboardDoctor = () => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);

  const fetchAppointments = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/");
      const data = await response.json();
      setAppointments(data);
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/${id}`, {
        method: "DELETE",
      });
      setAppointments(appointments.filter((appointment) => appointment._id !== id));
    } catch (error) {
      console.error("Error deleting appointment", error);
    }
  };

  const handleViewAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleBackToList = () => {
    setSelectedAppointment(null);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleToggleAppointments = () => {
    setShowAppointments(!showAppointments);
  };

  return (
    <div className={styles.dashboardContainer} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.dashboardHeader}>
        <h1>Doctor Dashboard</h1>
        <button onClick={handleToggleAppointments} className={styles.viewButton}>
          {showAppointments ? "Close Appointments" : "View Appointments"}
        </button>
      </div>
      {showAppointments && !selectedAppointment ? (
        <div className={styles.appointmentList}>
          <h2>Appointments</h2>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index} className={styles.appointmentItem}>
                <p>
                  <strong>Name:</strong> {appointment.name}
                </p>
                <button onClick={() => handleViewAppointment(appointment)} className={styles.viewButton}>
                  View Appointment
                </button>
                <button onClick={() => handleDelete(appointment._id)} className={styles.deleteButton}>
                  Delete Appointment
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : showAppointments && selectedAppointment ? (
        <div className={styles.appointmentDetails}>
          <h2>Appointment Details</h2>
          <p><strong>Name:</strong> {selectedAppointment.name}</p>
          <p><strong>Email:</strong> {selectedAppointment.email}</p>
          <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
          <p><strong>Date:</strong> {selectedAppointment.date}</p>
          <p><strong>Time:</strong> {selectedAppointment.time}</p>
          <p><strong>Department:</strong> {selectedAppointment.department}</p>
          <p><strong>Message:</strong> {selectedAppointment.message}</p>
          <button onClick={handleBackToList} className={styles.backButton}>
            Back to List
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DashboardDoctor;
