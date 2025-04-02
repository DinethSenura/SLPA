import React from 'react'
import '../AboutBanner/aboutbanner.css';
import { Link } from 'react-router-dom';

const Aboutbanner = () => {
  return (
      <div className="aboutbanner-wrapper">
      <div className="aboutbanner-small-boxes-container">
        {[
          { title: "SLPA", path: "/Slpa" },
          { title: "Vision and Mission", path: "/Visionmission" },
          { title: "Board of Directors", path: "/Boardofdirectors" },
          { title: "ACT", path: "/Act" },
          { title: "Procedures", path: "/Procedures" },
          { title: "Circular", path: "/Circlulars" },
          { title: "Awards", path: "/Awards" },
          { title: "Annual Reports", path: "/Annualreports" },
          { title: "Tariff", path: "/Tariff" },
          { title: "Right to Information", path: "/Righttoinformation" },
        ].map((box, i) => (
          <Link to={box.path} key={i} className="aboutbanner-small-box-link">
            <div className="aboutbanner-small-box">{box.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Aboutbanner
