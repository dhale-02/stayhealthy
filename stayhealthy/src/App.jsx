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
      {/* Notification is placed here for application-wide visibility */}
      <Notification />
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 style={{textAlign:'center', marginTop:'100px'}}>Welcome to StayHealthy 🏥</h2>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<FindDoctorSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
