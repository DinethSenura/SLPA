import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './jctect.css'; // CSS file for styles
import left from '../../assets/images/jctect/left.jpg';
import right from '../../assets/images/jctect/jct.jpg';
import plink from '../../assets/images/jctect/plink.jpg';

const Jctect = () => {
  return (
    <div className="slideshow-container">
      <div className="slideshow">
        {/* Use Link to navigate to the respective pages */}
        <Link to="/ect">
          <img src={left} alt="Left Side" className="side-image" />
        </Link>
        <Link to="/jct">
          <img src={right} alt="Right Side" className="side-image" />
        </Link>
        <Link to="/plink">
          <img src={plink} alt="Right Side Duplicate" className="side-image" />
        </Link>
        <Link to="/ect">
          <img src={left} alt="Left Side Duplicate" className="side-image" />
        </Link>
        <Link to="/jct">
          <img src={right} alt="Right Side Duplicate" className="side-image" />
        </Link>
        <Link to="/plink">
          <img src={plink} alt="Right Side Duplicate" className="side-image" />
        </Link>
        {/* Duplicate the images for seamless looping */}
        <Link to="/ect">
          <img src={left} alt="Left Side Duplicate 2" className="side-image" />
        </Link>
        <Link to="/jct">
          <img src={right} alt="Right Side Duplicate 2" className="side-image" />
        </Link>
        <Link to="/plink">
          <img src={plink} alt="Right Side Duplicate" className="side-image" />
        </Link>
      </div>
    </div>
  );
};

export default Jctect;
