import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is logged in when the component loads
  useEffect(() => {
    const token = sessionStorage.getItem('auth-token');
    const email = sessionStorage.getItem('email');
    
    if (token || email) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle the logout process
  const handleLogout = () => {
    sessionStorage.clear(); // Clear the saved auth data
    setIsLoggedIn(false);
    navigate('/'); // Send them back to the home page
    window.location.reload(); // Refresh to ensure the state is fully cleared
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🏥 StayHealthy</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        
        {/* Conditionally render buttons based on login status */}
        {isLoggedIn ? (
          <>
            <li>
              <button onClick={handleLogout} className="btn btn-login" style={{ cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem' }}>
                Logout
              </button>
            </li>
          </>
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
