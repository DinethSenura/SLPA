import React from 'react';
import './trincolocation.css';
import PortImage3 from '../../../../assets/images/Ports/PortColomboHero.jpg';
import TrincoBanner from '../../../../components/trincobanner/Trincobanner';

const ColomboLocation = () => {
  console.log("✅ Colombo Location Component Loaded!");

  return (
    <div className="colombo-location-container">
      <div className="header-section">
        <h1>LOCATION</h1>
        <p className="path">
          <a href="/">HOME</a>
          <span> &gt; </span> PORTS
          <span> &gt; </span> TRINCOMALEE
          <span> &gt; </span> LOCATION
        </p>
        <img src={PortImage3} alt="Colombo Port Overview" className="header-image" />
      </div>

    
      <TrincoBanner />
      
      
    </div>
  );
};

export default ColomboLocation;
