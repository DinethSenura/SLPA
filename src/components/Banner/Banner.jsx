import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../Banner/banner.css';
import { FaPhoneAlt } from 'react-icons/fa'; // Import phone icon

const Banner = () => {
  const handleNoticeClick = () => {
    alert("This is a placeholder for important notices.");
  };

  return (
    <div className="banner d-flex align-items-center justify-content-between">
      {/* Banner Text (Hidden on small screens, replaced with Notice button) */}
      <div className="d-none d-md-block flex-grow-1 text-center">
        <p className="banner-text">Sri Lanka Port Authority</p>
      </div>
      <div className="d-md-none">
        <button className="notice-button" onClick={handleNoticeClick}>
          Notice
        </button>
      </div>

      {/* Contact Info */}
      <div className="contact-info d-flex align-items-center">
        <div className="inquiry-point text-center me-2">
          <span className="inquiry-number">1984</span>
          <span className="inquiry-label d-block">INQUIRY POINT</span>
        </div>
        <button
          className="call-button"
          onClick={() => window.location.href = 'tel:1984'}
        >
          <FaPhoneAlt className="phone-icon" />
        </button>
      </div>

      {/* Language Buttons */}
      <div className="language-buttons d-flex flex-column me-2">
        <button className="sinhala-button mb-2">සිංහල</button>
        <button className="tamil-button">தமிழ்</button>
      </div>

      {/* Help Desk Button */}
      <button className="help-desk-button">Help</button>
    </div>
  );
};

export default Banner;
