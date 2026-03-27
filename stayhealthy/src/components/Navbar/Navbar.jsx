import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // We initialize the state by checking sessionStorage instantly.
  // This completely removes the need for useEffect and makes React happy!
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const token = sessionStorage.getItem('auth-token');
    const email = sessionStorage.getItem('email');
    return !!(token || email); // Returns true if either exists, false if empty
  });

  const handleLogout = () => {
    sessionStorage.clear(); // Clear the saved auth data
    setIsLoggedIn(false);
    window.location.href = '/'; // Forces navigation back to home AND reloads the state
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🏥 StayHealthy</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="btn btn-login" style={{ cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li><Link to="/login" className="btn btn-login">Login</Link></li>
            <li><Link to="/signup" className="btn btn-signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
