import React from 'react';
import '../Intro/intro.css';
import intro_1 from '../../assets/images/intro1.jpg';
import intro_2 from '../../assets/images/intro2.jpg';
import intro_3 from '../../assets/images/intro3.jpg';
import intro_4 from '../../assets/images/intro4.jpg'; // New image import

const Intro = () => {
  return (
    <div className="intro_sectiona">
      <div className="container">
        <div className="row">
          {/* Text Content */}
          <div className="contenta col-12 col-lg-6">
            <h2>Who We Are</h2>
            <p>
              Since 1918, the Port of Colombo had been administered by the Colombo Port Commission, a Government
              Department which was made responsible for the supply and maintenance of cargo-handling equipment and other
              infrastructure, pilotage services, docking and slipping. The government had funded all its activities.
              Stevedoring and shore handling activities were in the hands of several private Wharfage Companies. In
              1958, the Port Cargo Corporation was set up to take over these activities performed by a multiplicity of
              operators. The Port Tally and Protective Services Corporation was formed in 1967 in order to perform
              on-board tallying and watchmen services on behalf of Agents.
            </p>
            <p>
              The Sri Lanka Ports Authority was constituted under the provisions of the Sri Lanka Ports Authority Act,
              No. 15 of 1979 (subsequently amended by Act No. 7 of 1984 and Act No. 35 of 1984) on the 1st of August
              1979, effecting the merger of the Colombo Port Commission Department and the two existing statutory
              Corporations. This resulted in a unified organization with a streamlined structure. The Ports Authority
              does not receive financial allocations from the government but operates on its own revenue and resources.
            </p>
          </div>


          {/* Images Section */}
          <div className="imagesa col-12 col-lg-6">
            <div className="row">
              <div className="col-6 mb-3">
                <img className="intro_image_1 img-fluid" src={intro_1} alt="Intro 1" />
              </div>
              <div className="col-6 mb-3">
                <img className="intro_image_2 img-fluid" src={intro_2} alt="Intro 2" />
              </div>
              <div className="col-6 mb-3">
                <img className="intro_image_3 img-fluid" src={intro_3} alt="Intro 3" />
              </div>
              <div className="col-6 mb-3">
                <img className="intro_image_4 img-fluid" src={intro_4} alt="Intro 4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
