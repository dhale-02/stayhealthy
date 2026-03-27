import { useState } from 'react';
import './AppointmentFormIC.css';

function AppointmentFormIC() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to an API here
    console.log('Instant Consultation Requested:', { name, phoneNumber });
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setName('');
      setPhoneNumber('');
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="appointment-ic-container">
      <div className="appointment-ic-card">
        <h2>Instant Consultation</h2>
        <p className="appointment-subtitle">Get connected with a doctor quickly</p>
        
        {submitted && (
          <div className="alert-success" style={{ marginBottom: '16px', padding: '10px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#e0ffe0', color: '#007700' }}>
            Request sent! A doctor will call you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              required
            />
          </div>
          
          <button type="submit" className="book-btn-ic">Request Call</button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentFormIC;
