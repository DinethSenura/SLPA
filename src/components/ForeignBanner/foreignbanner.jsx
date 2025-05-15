import React from 'react'
import '../../components/ForeignBanner/foreignbanner.css';
import { Link } from 'react-router-dom';

const Aboutbanner = () => {
  return (
      <div className="aboutbanner-wrapper">
      <div className="aboutbanner-small-boxes-container">
        {[
          { title: "Other Materials & Equipment", path: "/ForeignPurchases" },
          { title: "Mechanical Equipment", path: "/foreignsecond" },
          { title: "Electrical equipment", path: "/foreignthird" },
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
