import { useState } from 'react';
import './GiveReviews.css';

function GiveReviews() {
  const [formData, setFormData] = useState({
    doctorName: '',
    reviewText: '',
    rating: '5'
  });
  
  // This state controls the "post-submission disabling behavior"
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Review Submitted:', formData);
    // Disable the form upon submission
    setSubmitted(true);
  };

  return (
    <div className="review-container">
      <div className="review-card">
        <h2>Leave a Review</h2>
        <p className="review-subtitle">Share your experience with our doctors</p>
        
        {submitted && (
          <div className="alert-success" style={{ marginBottom: '20px', padding: '12px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#e0ffe0', color: '#007700', border: '1px solid #aaffaa' }}>
            Thank you for your feedback! The form is now locked.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Doctor's Name</label>
            <input
              type="text"
              name="doctorName"
              placeholder="e.g., Dr. Smith"
              value={formData.doctorName}
              onChange={handleChange}
              disabled={submitted} /* Disables after submit */
              required
            />
          </div>
          
          <div className="form-group">
            <label>Rating</label>
            <select 
              name="rating" 
              value={formData.rating} 
              onChange={handleChange}
              disabled={submitted} /* Disables after submit */
            >
              <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
              <option value="4">⭐⭐⭐⭐ (Good)</option>
              <option value="3">⭐⭐⭐ (Average)</option>
              <option value="2">⭐⭐ (Poor)</option>
              <option value="1">⭐ (Terrible)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Your Review</label>
            <textarea
              name="reviewText"
              placeholder="Tell us about your appointment..."
              value={formData.reviewText}
              onChange={handleChange}
              disabled={submitted} /* Disables after submit */
              rows="4"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className={`review-btn ${submitted ? 'disabled-btn' : ''}`}
            disabled={submitted} /* Disables after submit */
          >
            {submitted ? 'Review Submitted' : 'Submit Review'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GiveReviews;
