import React from 'react';
import '../LocalPurchasesBanner/localpurchasesbanner.css';
import { Link } from 'react-router-dom';

const localpurchasesbanner = () => {
  return (
    <div className="localpurchasesbanner-wrapper">
          <div className="localpurchasesbanner-small-boxes-container">
            {[
              { title: "Mechanical Equipment", path: "/localpurchases" },
              { title: "Electrical Equipment", path: "/localpurchasessecond" },
              { title: "Other Materials & Equipment", path: "/localpurchasesthird" },
            ].map((box, i) => (
              <Link to={box.path} key={i} className="localpurchasesbanner-small-box-link">
                <div className="localpurchasesbanner-small-box">{box.title}</div>
              </Link>
            ))}
          </div>
        </div>
  )
}

export default localpurchasesbanner
