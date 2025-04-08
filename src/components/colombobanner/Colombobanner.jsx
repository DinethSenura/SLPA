import React from 'react'
import './colombobanner.css';
import { Link } from 'react-router-dom';

const Aboutbanner = () => {
  return (
      <div className="colombobanner-wrapper">
      <div className="colombobanner-small-boxes-container">
        {[
         { title: "About", path: "/'colomboabout" },
         { title: "Location", path: "/colombolocation" },
         { title: "Terminals", path: "/colomboterminals" },
         { title: "Port Facilities", path: "/colombofacilities" },
         { title: "General Cargo Services", path: "" },
         { title: "Entrance", path: "" },
         { title: "Compliance", path: "" },
         { title: "Mahapola Academy", path: "" }
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