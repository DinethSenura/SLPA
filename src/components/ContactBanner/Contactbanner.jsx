import React from 'react';
import '../ContactBanner/contactbanner.css';
import { Link } from 'react-router-dom';

const Contactbanner = () => {
  return (
    <div className="contactbanner-wrapper">
          <div className="contactbanner-small-boxes-container">
            {[
              { title: "Ministry", path: "/ministry" },
              { title: "Chairman & Directors", path: "/chairman&directors" },
              { title: "Management Team", path: "/managementteam" },
              { title: "Mahapola Academy", path: "/mahapolaacademy" },
              { title: "Help Desk", path: "/helpdesk" },
              { title: "SLPA Ports", path: "/slpaports" },
              { title: "Shipping Directory", path: "/shippingdirectory" },
              { title: " ISPS", path: "/isps" },
              { title: "Educational Visits", path: "/educationalvisits" },
            ].map((box, i) => (
              <Link to={box.path} key={i} className="contactbanner-small-box-link">
                <div className="contactbanner-small-box">{box.title}</div>
              </Link>
            ))}
          </div>
        </div>
  )
}

export default Contactbanner
