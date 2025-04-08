import React from 'react';
import './oluvillocation.css';
import PortImage3 from '../../../../assets/images/Ports/PortColomboHero.jpg';
import OluvilBanner from '../../../../components/OluvilBanner/oluvilbanner';

const ColomboLocation = () => {
  console.log("✅ Colombo Location Component Loaded!");

  return (
    <div className="colombo-location-container">
      <div className="header-section">
        <h1>LOCATION</h1>
        <p className="path">
          <a href="/">HOME</a>
          <span> &gt; </span> PORTS
          <span> &gt; </span> OLUVIL
          <span> &gt; </span> LOCATION
        </p>
        <img src={PortImage3} alt="Colombo Port Overview" className="header-image" />
      </div>

    
     <OluvilBanner />
      
      
    </div>
  );
};

export default ColomboLocation;
