import { useState, useEffect } from 'react';
import './Notification.css';

function Notification() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Check if user has an email in session storage
    const userEmail = sessionStorage.getItem('email');
    
    if (userEmail) {
      setMessage(`Welcome back, ${userEmail}!`);
      setShow(true);
      
      // Auto-hide the notification after 5 seconds
      const timer = setTimeout(() => {
        setShow(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="notification-banner">
      <p>🔔 {message}</p>
      <button className="close-btn" onClick={() => setShow(false)}>×</button>
    </div>
  );
}

export default Notification;
