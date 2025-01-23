import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './jctect.css'; // CSS file for styles
import left from '../../assets/images/jctect/left.jpg';
import right from '../../assets/images/jctect/jct.jpg';
import plink from '../../assets/images/jctect/plink.jpg';

const Jctect = () => {
  return (
    <div className="horizontal-images">
      {/* Use Link to navigate to the respective pages */}
      <Link to="/ect" className="image-link">
        <div className="image-container">
          <img src={left} alt="Left Side" className="image" />
        </div>
      </Link>
      <Link to="/jct" className="image-link">
        <div className="image-container">
          <img src={right} alt="Right Side" className="image" />
        </div>
      </Link>
      <Link to="/plink" className="image-link">
        <div className="image-container">
          <img src={plink} alt="Plink Side" className="image" />
        </div>
      </Link>
    </div>
  );
};

export default Jctect;
