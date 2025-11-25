import React from "react";
import styles from "./Email.module.css";

const Email = () => {
  return (
    <div className={styles.emailContainer}>
      <h1 className={styles.emailTitle}>Email Us</h1>
      <div className={styles.emailContent}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" className={styles.input} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
