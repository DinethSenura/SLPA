import React from 'react';
import './galle.css';
import PortImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import GalleBanner from '../../../components/gallebanner/Gallebanner';

const ColomboLocation = () => {
  console.log("✅ Colombo Location Component Loaded!");

  return (
    <div className="colombo-location-container">
      <div className="header-section">
        <h1>ABOUT</h1>
        <p className="path">
          <a href="/">HOME</a>
          <span> &gt; </span> PORTS
          <span> &gt; </span> GALLE
          <span> &gt; </span> ABOUT
        </p>
        <img src={PortImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

    
      <GalleBanner />
      
      
    </div>
  );
};

export default ColomboLocation;
