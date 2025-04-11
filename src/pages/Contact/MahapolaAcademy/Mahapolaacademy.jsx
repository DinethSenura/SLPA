import React from 'react';
import '../MahapolaAcademy/mahapolaacademy.css';
import Contactbanner from '../../../components/ContactBanner/Contactbanner';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';

const htmlContent = `
  <p>&nbsp;</p>
  <table border="0" cellpadding="4" cellspacing="0" style="width:100%">
    <tbody>
      <tr><td colspan="2"><strong>Institute Address :</strong></td></tr>
      <tr><td>&nbsp;</td><td><strong>Chief Training Manager</strong></td></tr>
      <tr><td>&nbsp;</td><td>Sri Lanka Ports Authority</td></tr>
      <tr><td>&nbsp;</td><td>Mahapola Ports &amp; Maritime Academy</td></tr>
      <tr><td>&nbsp;</td><td>507, De La Salle Street,</td></tr>
      <tr><td>&nbsp;</td><td>Colombo 15.</td></tr>
      <tr><td colspan="2">&nbsp;</td></tr>
      <tr><td colspan="2"><a href="road-map" target="_blank">Click here to view the Road Map</a></td></tr>
      <tr><td colspan="2"><a href="http://mpma.slpa.lk" target="_blank">Click here to visit MPMA site</a></td></tr>
      <tr><td colspan="2">&nbsp;</td></tr>
      <tr>
        <td colspan="2">
          <table align="left" border="0" cellpadding="2" cellspacing="0" style="width:70%;">
            <tbody>
              <tr><td>Telephone</td><td>:</td><td>+94 11 2522452 / +94 11 2523268 / +94 11 2520973</td></tr>
              <tr><td>Fax</td><td>:</td><td>+94 11 2522660</td></tr>
              <tr><td>Email</td><td>:</td><td><a href="mailto:mahapola@slpa.lk">mpma@slpa.lk</a></td></tr>
              <tr><td>Web</td><td>:</td><td><a href="http://mpma.slpa.lk" target="_blank">mpma.slpa.lk</a></td></tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
`;

const Mahapolaacadem = () => {
  return (
    <div className="mahapola-page">

      <div className="header-section">
          <h1>BOARD OF DIRECTORS</h1>
          <p className="path">
          <span></span>HOME
              <span>&gt;</span>ABOUT
              <span>&gt;</span>BOARD OF DIRECTORS
          </p>
          <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

      <Contactbanner />
      <div className="act-wrapper">
      <div
        className="mahapola-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      </div>
    </div>
  );
};

export default Mahapolaacadem;