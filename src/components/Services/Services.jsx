import React from 'react';
import './services.css';
import service_1 from '../../assets/images/terminal.jpg';
import service_2 from '../../assets/images/facilities.jpg';
import service_3 from '../../assets/images/logistics.jpg';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Valued Services</h2>

      <div className="services-container">
        <div className="service">
          <img src={service_1} alt="Terminals" />
          <h3>Terminals</h3>
          <p>
            The SLPA is fully equipped with state-of-the-art <br />
            facilities in all it is Terminals for container handling <br />
            operations.
          </p>
          <button>Read More</button>
        </div>

        <div className="service">
          <img src={service_2} alt="Facilities" />
          <h3>Facilities</h3>
          <p>
            The modern infrastructure facilities in SLPA-owned <br />
            CFS support rising Business transportation needs in <br />
            Sri Lanka.
          </p>
          <button>Read More</button>
        </div>

        <div className="service">
          <img src={service_3} alt="Logistics" />
          <h3>Logistics</h3>
          <p>
            SLPA Terminals equipped with tomorrow's technology <br />
            are geared for handling the rising demand in cargo <br />
            transportation.
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
