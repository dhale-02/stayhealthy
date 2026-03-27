import { useState, useEffect } from 'react';
import './ProfileCard.css';

function ProfileCard() {
  // We'll try to load the email from session storage if it exists
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    phone: '+1 234 567 8900',
    email: 'johndoe@example.com'
  });

  useEffect(() => {
    const sessionEmail = sessionStorage.getItem('email');
    if (sessionEmail) {
      setUserDetails(prev => ({ ...prev, email: sessionEmail }));
    }
  }, []);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Profile Updated:', userDetails);
    // Switch back to view mode after saving
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Patient Profile</h2>
        
        {isEditing ? (
          /* ================= EDIT FORM UI ================= */
          <form onSubmit={handleSave} className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={userDetails.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="profile-buttons">
              <button type="submit" className="save-btn">Save Changes</button>
              <button type="button" className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          /* ================= PROFILE CARD UI ================= */
          <div className="profile-details">
            <div className="detail-row">
              <strong>Name:</strong>
              <span>{userDetails.name}</span>
            </div>
            <div className="detail-row">
              <strong>Phone:</strong>
              <span>{userDetails.phone}</span>
            </div>
            <div className="detail-row">
              <strong>Email:</strong>
              <span>{userDetails.email}</span>
            </div>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
