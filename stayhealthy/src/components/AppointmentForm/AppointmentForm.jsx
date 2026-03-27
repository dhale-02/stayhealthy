import { useState } from 'react';
import './AppointmentForm.css';

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    time: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Booked:', formData);
    setSubmitted(true);
    
    // Reset the form after a few seconds
    setTimeout(() => {
      setFormData({ name: '', phoneNumber: '', date: '', time: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="appointment-container">
      <div className="appointment-card">
        <h2>Book an Appointment</h2>
        <p className="appointment-subtitle">Schedule your visit with a specialist</p>
        
        {submitted && (
          <div className="alert-success" style={{ marginBottom: '16px', padding: '10px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#e0ffe0', color: '#007700' }}>
            Appointment successfully booked!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group row-group">
            <div className="half-width">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="half-width">
              <label>Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <button type="submit" className="book-btn-main">Book Now</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
