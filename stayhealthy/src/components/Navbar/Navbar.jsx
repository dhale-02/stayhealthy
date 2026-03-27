import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🏥 StayHealthy</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/login" className="btn btn-login">Login</Link></li>
        <li><Link to="/signup" className="btn btn-signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;