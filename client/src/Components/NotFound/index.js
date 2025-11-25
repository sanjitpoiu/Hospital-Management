import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>404 - Not Found!</h1>
        <Link to="/" className={styles.notFoundLink}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
