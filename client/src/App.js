// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Login from "./Components/Login";
// import SignUp from "./Components/SignUp"; // Assuming you have a SignUp component
// import Home from "./Components/Home"; // Assuming you have a Home component
// import NotFound from "./Components/NotFound"; // Assuming you have a NotFound component
// import OTPForm from "./Components/OTPForm";
// import PatientLogin from "./Components/PatientLogin"; // Import the PatientLogin component
// import DoctorLogin from "./Components/DoctorLogin";

// function App() {
//   const user = localStorage.getItem("token");

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/otp" element={<OTPForm />} />
//         <Route path="/patient-login" element={<PatientLogin />} /> {/* Add route for patient login */}
//         <Route path="/doctor-login"  element={<DoctorLogin/>} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import OTPForm from "./Components/OTPForm";
import PatientLogin from "./Components/PatientLogin";
import DoctorLogin from "./Components/DoctorLogin";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Email from "./Components/Email";
import NavigationBar from "./Components/NavigationBar";
import RegisterPatient from "./Components/RegisterPatient";
import RegisterDoctor from "./Components/RegisterDoctor";
import DashboardDoctor from "./Components/DashboardDoctor";
import DashboardPatient from "./Components/DashboardPatient";
import Appointment from "./Components/Appointment";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ForgotPassword from "./Components/ForgotPassword";
import ResetPasswordPage from "./Components/ResetPasswordPage";
import UPIPayment from "./Components/UPIPayment";



function App() {
  const user = localStorage.getItem("token");

  return (
    <>
      <ToastContainer />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/email" element={<Email />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTPForm />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/register-patient" element={<RegisterPatient />} />
        <Route path="/register-doctor" element={<RegisterDoctor />} />
        {user && <Route path="/doctor-dashboard" element={<DashboardDoctor />} />}
        {user && <Route path="/patient-dashboard" element={<DashboardPatient />} />}
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token"  element={< ResetPasswordPage/>} />
        <Route path="/appointment" element={<Appointment/>} />
        <Route path="/upi" element={<UPIPayment/>} />
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
