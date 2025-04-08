import React from 'react';
import './kankesanthurai.css';
import PortImage3 from '../../../assets/images/Ports/PortColomboHero.jpg';
import KankasanthuraiBanner from '../../../components/kankasanthuraibanner/kankasanthuraibanner';

const ColomboLocation = () => {
  console.log("✅ Colombo Location Component Loaded!");

  return (
    <div className="colombo-location-container">
      <div className="header-section">
        <h1>ABOUT</h1>
        <p className="path">
          <a href="/">HOME</a>
          <span> &gt; </span> PORTS
          <span> &gt; </span> KANKASANTHURAI
          <span> &gt; </span> ABOUT
        </p>
        <img src={PortImage3} alt="Colombo Port Overview" className="header-image" />
      </div>

    
      <KankasanthuraiBanner />
      
      
    </div>
  );
};

export default ColomboLocation;
