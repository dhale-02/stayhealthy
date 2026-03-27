import { useState } from 'react';
import './DoctorCard.css';

function DoctorCard({ name = "Dr. Sarah Smith", specialty = "Cardiologist", experience = "10 Years", clinic = "StayHealthy Heart Center" }) {
  // State to track if an appointment is currently booked
  const [isBooked, setIsBooked] = useState(false);

  // Logic to book the appointment
  const handleBook = () => {
    setIsBooked(true);
  };

  // MUST INCLUDE: Cancel appointment logic
  const handleCancel = () => {
    // In a real app, this would call an API to delete the appointment record
    console.log(`Appointment with ${name} has been cancelled.`);
    setIsBooked(false);
  };

  return (
    <div className="doctor-card-container">
      <div className="doctor-info">
        <div className="doctor-avatar">
          {/* A simple placeholder for a doctor profile picture */}
          👨‍⚕️
        </div>
        <div className="doctor-details">
          <h3>{name}</h3>
          <p className="specialty">{specialty}</p>
          <p className="experience"><strong>Experience:</strong> {experience}</p>
          <p className="clinic"><strong>Clinic:</strong> {clinic}</p>
        </div>
      </div>

      <div className="doctor-actions">
        {isBooked ? (
          <div className="booked-state">
            <p className="status-text">✅ Appointment Confirmed</p>
            {/* The crucial cancel button */}
            <button className="cancel-btn-action" onClick={handleCancel}>
              Cancel Appointment
            </button>
          </div>
        ) : (
          <button className="book-btn-action" onClick={handleBook}>
            Book Appointment
          </button>
        )}
      </div>
    </div>
  );
}

export default DoctorCard;
