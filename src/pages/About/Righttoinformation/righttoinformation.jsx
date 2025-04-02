import React from 'react';
import { Link } from 'react-router-dom';
import './righttoinformation.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import DOMPurify from 'dompurify';
import Aboutbanner from '../../../components/AboutBanner/Aboutbanner'

const berthingprogramme = () => {
  const htmlContent = `<p><span style="color:#000000;"><span style="font-size:18px;"><strong>IMPLEMENTATION OF THE RIGHT TO INFORMATION ACT, NO.12 OF 2016</strong></span></span></p>

<div class="col-md-12">
<p class="header_black"><span style="font-size:16px;"><strong>Information Officers</strong></span></p>

<p style="text-align: justify;">The particulars of the Information officers and the Designated officer appointed under section 23 of the Right to Information Act, No. 12 of 2016 (RTI Act) of the Sri Lanka Ports Authority are as follows:</p>

<p class="header_two"><b>Capt. Harsha Weerasuriya<br />
<small>(Head of the Special Investigation Unit/Deputy Chief Manager - Security) </small></b></p>`;

  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div>
      <div className="header-section">
        <h1>SLPA</h1>
        <p className="path">
          <Link to="/Home">HOME</Link>
          <span>&gt;</span>ABOUT
          <span>&gt;</span>SLPA
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

      <Aboutbanner />

      <div>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
    </div>
  );
};

export default berthingprogramme;