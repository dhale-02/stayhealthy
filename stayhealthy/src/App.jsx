import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import FindDoctorSearch from './components/FindDoctorSearch/FindDoctorSearch';
import Notification from './components/Notification/Notification';
import './App.css';

function App() {
  return (
    <Router>
      <Notification />
      <Navbar />
      <Routes>
        {/* Updated Landing Page Route */}
        <Route path="/" element={
          <div style={{ textAlign: 'center', marginTop: '100px', padding: '0 20px' }}>
            <h1 style={{ color: '#0a74da', fontSize: '3rem', marginBottom: '10px' }}>StayHealthy 🏥</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Connecting patients with top doctors anytime, anywhere. 
              <br/>Improving access to medical services in remote and underserved areas.
            </p>
            <button style={{ marginTop: '30px', padding: '12px 24px', backgroundColor: '#0a74da', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>
              Get Started
            </button>
          </div>
        } />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<FindDoctorSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
