import React from 'react';
import shipImage from '../../assets/images/home/ship.jpg'; // Adjust path based on your folder structure
// import 'bootstrap/dist/css/bootstrap.min.css';
import './hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <img 
        src={shipImage} 
        alt="Hero Banner" 
        className="img-fluid hero-image" 
      />
    </div>
  );
};

export default Hero;
