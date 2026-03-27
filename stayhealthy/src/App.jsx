import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h2 style={{textAlign:'center', marginTop:'100px'}}>Welcome to StayHealthy 🏥</h2>} />
      </Routes>
    </Router>
  );
}

export default App;