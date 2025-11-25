
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import styles from './Appointment.module.css';

const Appointment = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        department: '',
        message: '',
    });

    const [appointments, setAppointments] = useState([]);
    const [showAppointments, setShowAppointments] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            toast.success('Appointment booked successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            fetchAppointments(); // Fetch updated appointments after booking
        } catch (error) {
            console.error('Error submitting form', error);
            toast.error('Failed to book appointment. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const fetchAppointments = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/');
            const data = await response.json();
            setAppointments(data);
        } catch (error) {
            console.error('Error fetching appointments', error);
            toast.error('Failed to fetch appointments. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:8080/api/${id}`, {
                method: 'DELETE',
            });
            toast.success('Appointment deleted successfully!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setAppointments(appointments.filter((appointment) => appointment._id !== id));
        } catch (error) {
            console.error('Error deleting appointment', error);
            toast.error('Failed to delete appointment. Please try again.', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    const handlePrint = () => {
        window.print();
    };

    const handleCloseAppointments = () => {
        setShowAppointments(false);
        setSelectedAppointment(null);
    };

    const handleViewAppointment = (appointment) => {
        setSelectedAppointment(appointment);
    };

    const handleBackToList = () => {
        setSelectedAppointment(null);
    };

    const handleShowAppointments = () => {
        fetchAppointments();
        setShowAppointments(true);
    };

    return (
        <div className={styles.appointmentContainer}>
            {!showAppointments && (
                <>
                    <h1>Book an Appointment</h1>
                    <form onSubmit={handleSubmit} className={styles.appointmentForm}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="date">Preferred Date</label>
                            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="time">Preferred Time</label>
                            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="department">Department</label>
                            <select id="department" name="department" value={formData.department} onChange={handleChange} required>
                                <option value="">Select Department</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Neurology">Neurology</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message (Optional)</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className={styles.submitButton}>Book Appointment</button>
                    </form>
                    <button onClick={handleShowAppointments} className={styles.viewButton}>View Appointments</button>
                </>
            )}

            {showAppointments && (
                <div className={styles.appointmentList}>
                    <h2>Appointments List</h2>
                    {appointments.map((appointment) => (
                        <div key={appointment._id} className={styles.appointmentCard}>
                            <p><strong>Name:</strong> {appointment.name}</p>
                            <p><strong>Email:</strong> {appointment.email}</p>
                            <p><strong>Phone:</strong> {appointment.phone}</p>
                            <p><strong>Date:</strong> {appointment.date}</p>
                            <p><strong>Time:</strong> {appointment.time}</p>
                            <p><strong>Department:</strong> {appointment.department}</p>
                            <p><strong>Message:</strong> {appointment.message}</p>
                            <div className={styles.buttonContainer}>
                                <button onClick={() => handleViewAppointment(appointment)} className={styles.viewButton}>View</button>
                                <button onClick={() => handleDelete(appointment._id)} className={styles.deleteButton}>Delete</button>
                                <button onClick={() => handlePrint()} className={styles.printButton}>Print</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={handleCloseAppointments} className={styles.closeButton}>Close List</button>
                </div>
            )}

            {selectedAppointment && (
                <div className={styles.appointmentDetails}>
                    <h2>Appointment Details</h2>
                    <p><strong>Name:</strong> {selectedAppointment.name}</p>
                    <p><strong>Email:</strong> {selectedAppointment.email}</p>
                    <p><strong>Phone:</strong> {selectedAppointment.phone}</p>
                    <p><strong>Date:</strong> {selectedAppointment.date}</p>
                    <p><strong>Time:</strong> {selectedAppointment.time}</p>
                    <p><strong>Department:</strong> {selectedAppointment.department}</p>
                    <p><strong>Message:</strong> {selectedAppointment.message}</p>
                    <button onClick={handleBackToList} className={styles.closeButton}>Back to List</button>
                </div>
            )}
        </div>
    );
};

export default Appointment;
