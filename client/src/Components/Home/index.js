// import React from "react";
// import { Link } from "react-router-dom";
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import styles from "./Home.module.css";

// const Home = () => {
//   return (
//     <div className={styles.homeContainer}>
//       <nav className={styles.navbar}>
        
//       </nav>
//       <div className={styles.homeContent}>
        
//         <Carousel
//           showArrows={true}
//           autoPlay={true}
//           infiniteLoop={true}
//           showThumbs={false}
//           showStatus={false}
//           interval={3000}
//           className={styles.carousel}
//         >
//           <div>
//             <img src="https://media.istockphoto.com/id/1689003176/photo/medical-technology-doctor-holding-health-icon-with-dna-electronic-medical-record-digital.jpg?s=1024x1024&w=is&k=20&c=0pxRb1QAYGi2Nj02168MxIsqZEV7WXGXGbuwKWd3QwI=" alt="Medical Care" />
//             <Link to="/medical-care" className="legend">Medical Care</Link>
//           </div>
//           <div>
//             <img src="https://media.istockphoto.com/id/1925983072/photo/medical-technology-doctor-using-digital-tablet-touching-on-global-medical-healthcare-network.jpg?s=1024x1024&w=is&k=20&c=GhyXg6v9xDgDlNZfb6EuY6SbchOKwdF74riyr4kDBoQ=" alt="Healthcare Professionals" />
//             <Link to="/healthcare-professionals" className="legend">Healthcare Professionals</Link>
//           </div>
//           <div>
//             <img src="https://media.istockphoto.com/id/1393787314/photo/businessman-using-hand-hold-digital-icon-interface-screen-service-and-health-care-insurance.jpg?s=1024x1024&w=is&k=20&c=uc8-BHcldAuxVLR4ImJB0X-0xYeRiJKw1XyWTu1PAkI=" alt="Advanced Equipment" />
//             <Link to="/advanced-equipment" className="legend">Advanced Equipment</Link>
//           </div>
//         </Carousel>
       
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import styles from './Home.module.css'; // Import the CSS module

// const Home = () => {
//   return (
//     <div className={styles.homeContainer}>
//       <header className={styles.heroSection}>
//         <div className={styles.heroContent}>
//           <h1>Welcome to Our Hospital</h1>
//           <p>Providing exceptional healthcare with compassion and care</p>
//           <button className={styles.ctaButton}>Make an Appointment</button>
//         </div>
//       </header>
//       <section className={styles.servicesSection}>
//         <h2>Our Services</h2>
//         <div className={styles.servicesGrid}>
//           <div className={styles.serviceCard}>
//             <h3>Cardiology</h3>
//             <p>Expert heart care services with state-of-the-art facilities.</p>
//           </div>
//           <div className={styles.serviceCard}>
//             <h3>Orthopedics</h3>
//             <p>Advanced treatment for bone and joint conditions.</p>
//           </div>
//           <div className={styles.serviceCard}>
//             <h3>Pediatrics</h3>
//             <p>Comprehensive care for infants, children, and adolescents.</p>
//           </div>
//           <div className={styles.serviceCard}>
//             <h3>Emergency</h3>
//             <p>24/7 emergency services to handle critical conditions.</p>
//           </div>
//         </div>
//       </section>
//       <section className={styles.aboutSection}>
//         <h2>About Us</h2>
//         <p>Our hospital is dedicated to providing top-quality healthcare services with a team of experienced professionals. We are equipped with the latest technology and facilities to ensure the best care for our patients.</p>
//       </section>
//       <section className={styles.contactSection}>
//         <h2>Contact Us</h2>
//         <p>For appointments or inquiries, please contact us at:</p>
//         <p>Phone: (123) 456-7890</p>
//         <p>Email: info@hospital.com</p>
//       </section>
//       <footer className={styles.footer}>
//         <p>&copy; 2024 Our Hospital. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './Home.module.css'; // Import the CSS module


const Home = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    // Redirect to the appointment page
    navigate('/login'); // Update with the correct route for your appointment page
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Hospital</h1>
          <p>Providing exceptional healthcare with compassion and care</p>
          <button className={styles.ctaButton} onClick={handleAppointmentClick}>Make an Appointment</button>
        </div>
      </header>
      <section className={styles.servicesSection}>
        <h2>Our Services</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Cardiology</h3>
            <p>Expert heart care services with state-of-the-art facilities.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Orthopedics</h3>
            <p>Advanced treatment for bone and joint conditions.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Pediatrics</h3>
            <p>Comprehensive care for infants, children, and adolescents.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Emergency</h3>
            <p>24/7 emergency services to handle critical conditions.</p>
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <p>Our hospital is dedicated to providing top-quality healthcare services with a team of experienced professionals. We are equipped with the latest technology and facilities to ensure the best care for our patients.</p>
      </section>
      <section className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>For appointments or inquiries, please contact us at:</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@hospital.com</p>
      </section>
      <footer className={styles.footer}>
        <p>&copy; 2024 Our Hospital. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
