

// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./NavigationBar.module.css";

// const NavigationBar = () => {
//   const navigate = useNavigate();
//   const patient = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.navList}>
//         <div className="head">
//           <h1></h1>
//         </div>
//         <li className={styles.navItem}>
//           <Link to="/" className={styles.navLink}>Home</Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/about" className={styles.navLink}>About</Link>
//         </li>
//         {patient ? (
//           <> 
          
//             <li className={styles.navItem}>
//               <Link to="/profile" className={styles.navLink}>Profile</Link>
//             </li>
//             <button className={styles.logoutButton} onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) 
//         : (
//           <>
//             <li className={styles.navItem}>
//               <Link to="/contact" className={styles.navLink}>Contact Us</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link to="/email" className={styles.navLink}>Email Us</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link to="/login" className={styles.navLink}>Login</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default NavigationBar;


// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./NavigationBar.module.css";

// const NavigationBar = () => {
//   const navigate = useNavigate();
//   const patient = localStorage.getItem("token");
//   const patientName = localStorage.getItem("patientName");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("patientName");
//     navigate("/login");
//   };

//   return (
//     <nav className={styles.navbar}>
//       <ul className={styles.navList}>
//         <div className="head">
//           <h1></h1>
//         </div>
//         <li className={styles.navItem}>
//           <Link to="/" className={styles.navLink}>Home</Link>
//         </li>
//         <li className={styles.navItem}>
//           <Link to="/about" className={styles.navLink}>About</Link>
//         </li>
//         {patient ? (
//           <> 
//             <li className={styles.navItem}>
//               <Link to="/profile" className={styles.navLink}>{patientName}</Link>
//             </li>
//             <button className={styles.logoutButton} onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) 
//         : (
//           <>
//             <li className={styles.navItem}>
//               <Link to="/contact" className={styles.navLink}>Contact Us</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link to="/email" className={styles.navLink}>Email Us</Link>
//             </li>
//             <li className={styles.navItem}>
//               <Link to="/login" className={styles.navLink}>Login</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default NavigationBar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavigationBar.module.css";

const NavigationBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" className={styles.navLink}>About</Link>
        </li>
        {token ? (
          <>
            <li className={styles.navItem}>
              <Link to="/profile" className={styles.navLink}>{userName}</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/edit-profile" className={styles.navLink}>Edit Profile</Link>
            </li>
            <button className={styles.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>Contact Us</Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/login" className={styles.navLink}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavigationBar;
