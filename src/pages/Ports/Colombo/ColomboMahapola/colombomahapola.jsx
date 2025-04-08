import React from 'react';
import './colombomahapola.css';
import portImage1 from '../../../../assets/images/Ports/PortColomboHero.jpg'; // ✅ Fixed import path
import ColomboBanner from '../../../../components/colombobanner/Colombobanner';

const ColomboLocation = () => {
  console.log("✅ Colombo Location Component Loaded!");

  return (
    <div className="colombo-location-container">
      <div className="header-section">
        <h1>MAHAPOLA ACADEMY</h1>
        <p className="path">
          <a href="/">HOME</a>
          <span> &gt; </span> PORTS
          <span> &gt; </span> COLOMBO
          <span> &gt; </span> MAHAPOLA ACADEMY
        </p>
        <img src={portImage1} alt="Colombo Port Overview" className="header-image" />
      </div>

     <ColomboBanner />

      
      
    </div>
  );
};

export default ColomboLocation;
