import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact Us</h1>
      <div className={styles.contactContent}>
        <p>If you have any questions, feel free to reach out to us:</p>
        <p>Email: info@myhospital.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Address: 123 Medical Street, Healthcare City, UK</p>
      </div>
    </div>
  );
};

export default Contact;
