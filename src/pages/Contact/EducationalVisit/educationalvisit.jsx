import React from 'react'
//import DOMPurify from 'dompurify';
// import { Link } from 'react-router-dom';
import './educationalvisit.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';


const EducationalVisit = () => {
  return (

    <div >
            <div className="header-section">
                <h1>BOARD OF DIRECTORS</h1>
                <p className="path">
                <span></span>HOME
                    <span>&gt;</span>ABOUT
                    <span>&gt;</span>BOARD OF DIRECTORS
                </p>
                <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
            </div>


    <div class="col-md-6 offset-md-3">
      <div style={{ textAlign: 'center' }}>
        <img 
          alt="" 
          className="img-responsive" 
          src="https://www.slpa.lk/uploads/article/article_image_ext_2022_11_18_1668762030.jpg" 
          width="98%" 
        />
      </div>

      <p>&nbsp;</p>

      <div style={{ backgroundColor: '#f8f365', color: 'black', padding: '20px' }}>
        <p style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '18px' }}>
            <strong>
              Sri Lanka Ports Authority, we welcome you all.<br />
              We offer free educational guided tours to explore the development of our port and understand how we work.<br />
              Visit us and enhance your knowledge.
            </strong>
          </span>
        </p>
      </div>

      <p style={{ textAlign: 'justify' }}>
        These visits are aimed at Government or Private Schools, Tertiary Educational Institutes and Universities.
      </p>

      <p style={{ textAlign: 'justify' }}>
        Visits must be booked in advance by calling or sending an email to the person responsible for this activity.
      </p>

      <p style={{ textAlign: 'justify' }}>
        <strong>For inquiries</strong> (During office hours only):
      </p>

      <p>&nbsp;</p>

      <table 
        align="center" 
        border="1" 
        cellpadding="4" 
        cellspacing="0" 
        className="table table-hover" 
        style={{ height: '75%', width: '75%' }}
      >
        <tbody>
          <tr>
            <td>
              <strong>Director (Security) Office</strong><br /><br />
              Tel: +94 11 2483781<br />
              E-Mail: <u>snilmini@slpa.lk</u>
            </td>
            <td>
              <strong>Deputy Chief Security Manager's Office</strong><br /><br />
              Tel: +94 11 2482305<br />
              E-Mail: <u>upaligamage@slpa.lk</u>
            </td>
          </tr>
        </tbody>
      </table>

      <p>&nbsp;</p>

      <p style={{ textAlign: 'justify' }}>
        Download the form required to obtain permission to visit the Port of Colombo here:
      </p>

      <p style={{ textAlign: 'center' }}>
        <strong>
          Permission to visit the Port of Colombo Form - &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a 
            href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_15_16764512651676451293.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            English
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a 
            href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_15_16764512651676451338.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Sinhala
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a 
            href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_15_16764512651676451359.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Tamil
          </a>
        </strong>
      </p>
    </div>
    </div>
  );
};

export default EducationalVisit;
