import { useState } from 'react';
import './FindDoctorSearch.css';

const initSpeciality = [
  'Dentist', 'Gynecologist', 'Cardiologist', 'Psychiatrist', 'Neurologist', 'Pediatrician'
];

function FindDoctorSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [specialities, setSpecialities] = useState(initSpeciality);

  const handleSearch = (searchText) => {
    setSearchQuery(searchText);
    if (searchText === '') {
      setSpecialities(initSpeciality);
      return;
    }
    const filteredSpecialities = initSpeciality.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
    setSpecialities(filteredSpecialities);
  };

  return (
    <div className="find-doctor-container">
      <div className="find-doctor-header">
        <h1>Find a doctor at your own ease</h1>
        <p>Book appointments with the best specialists</p>
      </div>
      
      <div className="search-wrapper">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search specialties (e.g., Dentist)"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="specialty-results">
        {specialities.map((speciality, index) => (
          <div className="specialty-card" key={index}>
            <h3>{speciality}</h3>
            <button className="book-btn">Book Appointment</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindDoctorSearch;
