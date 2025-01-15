import React from 'react';
import '../Colombo/colombo.css';
import portImage from '../../../assets/images/Ports/PortColomboHero.jpg';
import portImage1 from '../../../assets/images/Ports/colombo_prt1.jpg';

const Ports = () => {
  return (
    <div className="ports-container">
      <div className="header-section">
        <h1>ABOUT</h1>
        <p class="path">
          <a href="#home">HOME</a>
          <span>&gt;</span>PORTS
          <span>&gt;</span>COLOMBO
          <span>&gt;</span>ABOUT</p>
          
        <img src={portImage} alt="Colombo Port Overview" className="header-image" />
      </div>
      <div className="content-section">
        <img src={portImage1} alt="Colombo Port View" className="content-image" />
        <h2>COLOMBO PORT</h2>
        <p>
          Colombo Port is a rapidly growing maritime hub of the South Asia Region. Cargo
          originating from and destined to Europe, East and South Asia, the Persian Gulf,
          and East Africa is conveniently and efficiently connected through the Colombo Port.
        </p>
        <p>
          The Colombo Port is primarily a container port. In 2015, it handled about
          5.1 million TEU of containerized cargo.
        </p>
        <p>
          The original port had a harbour area of 184 hectares. In 2008, the South Harbour
          area (285 hectares) was developed to accommodate deep water cargo.
        </p>
      </div>
    </div>
  );
};

export default Ports;
