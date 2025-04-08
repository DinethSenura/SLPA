import React from 'react'
import './gallebanner.css';
import { Link } from 'react-router-dom';

const Aboutbanner = () => {
  return (
      <div className="colombobanner-wrapper">
      <div className="colombobanner-small-boxes-container">
        {[
         { title: "About", path: "/galleabout" },
         { title: "Location", path: "/gallelocation" },
         { title: "Compliance", path: "/gallecompliane" }
        ].map((box, i) => (
          <Link to={box.path} key={i} className="colombobanner-small-box-link">
            <div className="colombobanner-small-box">{box.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Aboutbanner