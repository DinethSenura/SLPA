import React from 'react'
import './trincobanner.css';
import { Link } from 'react-router-dom';

const Aboutbanner = () => {
  return (
      <div className="colombobanner-wrapper">
      <div className="colombobanner-small-boxes-container">
        {[
         { title: "About", path: "/trincoabout" },
         { title: "Location", path: "/trincolocation" },
         { title: "Terminal Info", path: "/trincoterminal" },
         { title: "Compliance", path: "/trincocompliane" }
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