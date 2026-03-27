import { useState, useEffect } from 'react';
import './Notification.css';

function Notification() {
  // 1. Initialize message state instantly
  const [message] = useState(() => {
    const userEmail = sessionStorage.getItem('email');
    return userEmail ? `Welcome back, ${userEmail}!` : '';
  });

  // 2. Initialize show state instantly
  const [show, setShow] = useState(() => {
    const userEmail = sessionStorage.getItem('email');
    return !!userEmail; // Returns true if email exists, false if not
  });

  // 3. Only use useEffect for the 5-second timer side-effect
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false); // This is asynchronous, so the linter won't complain!
      }, 5000);
      
      return () => clearTimeout(timer); // Cleanup timer if component unmounts
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="notification-banner">
      <p>🔔 {message}</p>
      <button className="close-btn" onClick={() => setShow(false)}>×</button>
    </div>
  );
}

export default Notification;
