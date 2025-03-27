import React from 'react';
import { Link } from 'react-router-dom';
import './tariff.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import DOMPurify from 'dompurify';

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

      <div className="small-boxes-container">
        {[
          { title: 'SLPA', path: '/Slpa' },
          { title: 'Vision and Mission', path: '/Visionmission' },
          { title: 'Board of Directors', path: '/Boardofdirectors' },
          { title: 'ACT', path: '/Act' },
          { title: 'Procedures', path: '/Procedures' },
          { title: 'Circular', path: '/Circlular' },
          { title: 'Awards', path: 'Awards' },
          { title: 'Annual Reports', path: 'Annualreport' },
          { title: 'Tariff', path: 'Tariff' },
          { title: 'Right to Information', path: 'Righttoinformation' },
        ].map((box, i) => (
          <Link to={box.path} key={i} className="small-box-link">
            <div className="small-box">{box.title}</div>
          </Link>
        ))}
      </div>

      <div>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
    </div>
  );
};

export default berthingprogramme;