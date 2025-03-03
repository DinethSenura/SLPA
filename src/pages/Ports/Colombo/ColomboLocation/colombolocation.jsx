import React from 'react';
import './colombolocation.css';
import portImage1 from '../../../../assets/images/Ports/PortColomboHero.jpg'; // ✅ Fixed import path
import { Link } from 'react-router-dom';

const ColomboLocation = () => {
  console.log("✅ Colombo Location Component Loaded!");

  return (
    <div className="colombo-location-container">
      <div className="header-section">
        <h1>LOCATION</h1>
        <p className="path">
          <a href="/">HOME</a>
          <span> &gt; </span> PORTS
          <span> &gt; </span> COLOMBO
          <span> &gt; </span> LOCATION
        </p>
        <img src={portImage1} alt="Colombo Port Overview" className="header-image" />
      </div>

      <div className="small-boxes-container">
        {[
          { title: "About", path: "/colomboabout" },
          { title: "Location", path: "/colombolocation" },
          { title: "Terminals", path: "/colomboterminals" },
          { title: "Port Facilities", path: "/colombofacilities" },
          { title: "General Cargo Services", path: "" },
          { title: "Entrance", path: "" },
          { title: "Compliance", path: "" },
          { title: "Mahapola Academy", path: "" }
        ].map((box, i) => (
          <Link to={box.path} key={i} className="small-box-link">
            <div className="small-box">{box.title}</div>
          </Link>
        ))}
      </div>

      
      
    </div>
  );
};

export default ColomboLocation;
