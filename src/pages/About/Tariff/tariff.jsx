import React from 'react';
import { Link } from 'react-router-dom';
import './tariff.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import DOMPurify from 'dompurify';
import Aboutbanner from '../../../components/AboutBanner/Aboutbanner'

const berthingprogramme = () => {
  const htmlContent = `<table border="0" cellspacing="0" style="width:50%;">
    <tbody>
      <tr>
        <td><strong>Tariff&nbsp;&nbsp; 2022</strong></td>
        <td><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2025_02_21_17401148481740118457.pdf" style="color: #0000FF" target="_blank"><img src="../uploads/login.png" /></a></td>
      </tr>
    </tbody>
  </table>`;
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