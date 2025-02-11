import React from 'react';
import '../Colombo/colombo.css';
import portImage from '../../../assets/images/Ports/PortColomboHero.jpg';
import portImage1 from '../../../assets/images/Ports/colombo_prt1.jpg';
import { Link } from 'react-router-dom'; // Import Link from React Router
import leftImage from '../../../assets/images/jctect/left.jpg';
import rightImage from '../../../assets/images/jctect/jct.jpg';
import plinkImage from '../../../assets/images/jctect/plink.jpg';

const Ports = () => {
  return (
    <div className="ports-container">
      <div className="header-section">
        <h1>ABOUT</h1>
        <p className="path">
          <a href="#home">HOME</a>
          <span>&gt;</span>PORTS
          <span>&gt;</span>COLOMBO
          <span>&gt;</span>ABOUT
        </p>
        <img src={portImage} alt="Colombo Port Overview" className="header-image" />
      </div>

      {/* Small Boxes Section */}
      <div className="small-boxes-container">
        {[
          { title: "About" },
          { title: "Location" },
          { title: "Location" },
          { title: "Port Facilities" },
          { title: "General Cargo Services" },
          { title: "Entrance" },
          { title: "Compliance" },
          { title: "Mahapola Academy" }
        ].map((box, i) => (
          <div key={i} className="small-box">
            {box.title}
          </div>
        ))}
      </div>


      {/* Content Section */}
      <div className="main-content">
        <div className="content-section">
          <img src={portImage1} alt="Colombo Port View" className="content-image" />
          <h2>COLOMBO PORT</h2>
          <p>
          Colombo Port is a rapidly growing maritime hub of the South Asia Region. Cargo originating from and destined to<br/> Europe, East and South Asia, the Persian Gulf, and East Africa is conveniently and efficiently connected through<br/>the Colombo Port.<br/>

          <br/>  The Colombo Port is primarily a container port. In 2015, it handled about 5.1 million TEU of containerized cargo.

          <br/>      The original port had a harbour area of 184 hectares. In 2008, the South Harbour area (285 hectares) was <br/>developed to accommodate deep water berths and the latest generation of mainline vessels. The harbour is <br/>served by a two-way channel with an initial depth of 20m and a width of 570m.<br/>

In addition to the container terminals in the original port area, SLPA planned to develop three terminals (each having capacity of 2.4 million TEU) in the South Harbour, the first of which was built and in operation on a build operate-transfer (BOT) basis by Colombo International Container Terminals Limited (CICT), a joint venture company of China Merchants Holding (International) Co. Ltd and SLPA</p>
        </div>

        {/* Advertisement Section */}
        <div className="ads-section">
            <div className="ad ad-small">
                 <Link to="/ect" className="image-link_1">
                     <div className="image-container_1">
                        <img src={leftImage} alt="Left Side" className="image_1" />
                     </div>
                 </Link>
            </div>
            <div className="ad ad-small">
                 <Link to="/jct" className="image-link_1">
                     <div className="image-container_1">
                        <img src={rightImage} alt="Right Side" className="image_1" />
                     </div>
                 </Link>
            </div>
            <div className="ad ad-small">
                <Link to="/plink" className="image-link_1">
                   <div className="image-container_1">
                      <img src={plinkImage} alt="Plink Side" className="image_1" />
                   </div>
                </Link>
            
          </div>
          <div className="ad_1 ad-large">Large Ad</div>
        </div>
      </div>
    </div>
  );
};

export default Ports;
