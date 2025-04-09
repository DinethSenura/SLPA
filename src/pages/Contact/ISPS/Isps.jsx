import React from 'react';
import '../ISPS/isps.css';
import Contactbanner from '../../../components/ContactBanner/Contactbanner';

const ispsContent = `
  <h4><strong>Sri Lanka Ports Authority ISPS related contact details</strong></h4>
  <p>&nbsp;</p>
  <table border="0" cellpadding="4" cellspacing="0" style="width:100%">
    <tbody>
      <tr>
        <td><strong>Capt. Nirmal Silva</strong><br />
        Harbour Master (Sri Lanka Ports Authority)<br />
        Colombo 02.<br />
        Tel: +94 11 2385401<br />
        E-mail : nirmalsilva@slpa.lk</td>
        <td><strong>Capt. Lakshi Wasantha</strong><br />
        Senior Deputy Harbour Master (Sri Lanka Ports Authority)<br />
        Tel: +94 11 2434120<br />
        E-mail : lakshi@slpa.lk</td>
      </tr>
      
      <tr>
        <td><strong>Capt. Harsha Weerasuriya</strong><br />
        Port Facility Security Officer - Vigilance (Sri Lanka Ports Authority)<br />
        Tel: +94 11 3075290<br />
        Email: hou-siu@slpa.lk</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
  <p>&nbsp;</p>
  <center>
    <table border="1" cellpadding="4" cellspacing="0" class="table table-hover" style="width:100%">
      <tbody>
        <tr>
          <td style="text-align: center;"><strong>Name of the Port</strong></td>
          <td style="text-align: center;"><strong>Deputy Harbour Master</strong><br />Sri Lanka Ports Authority</td>
          <td style="text-align: center; background-color:#AED6F1"><strong>Port Facility Security Officer (PFSO)</strong></td>
        </tr>
        <tr>
          <td><strong>Colombo</strong></td>
          <td><strong>Capt. Lakshi Wasantha</strong><br />Senior Deputy Harbour Master<br />(Sri Lanka Ports Authority)<br />Tel: +94 11 2434120<br />Email: lakshi@slpa.lk</td>
          <td style="background-color:#AED6F1"><strong>Commodore Buddhika Jayaweera</strong><br />Port Facility Security Officer (PFSO)<br />(Sri Lanka Navy)<br />Tel: +94 76 9104333<br /><br />
          <strong>Lt Commander Sandun Wijerathna</strong><br />Assistant Port Facility Security Officer (APFSO)<br />(Sri Lanka Navy)<br />Tel: +94 71 3523220<br /><br />
          <strong>Lieutenant Tharindu Balasooriya</strong><br />ISPS Officer<br />(Sri Lanka Navy)<br />Tel: +94 76 3159239, +94 11 2333378<br />
          Email: pfsocbo@navy.lk, ispscbo@navy.lk</td>
        </tr>
        <tr>
          <td><strong>Galle</strong></td>
          <td><strong>Capt. Sajeewa Wimalasiri</strong><br />Deputy Harbour Master<br />(Sri Lanka Ports Authority)<br />Tel: +94 91 2234824<br />Email: sajeewawimalasiri@slpa.lk</td>
          <td style="background-color:#AED6F1"><strong>Commodore H.I.A.Gunawardana</strong><br />Port Facility Security Officer (PFSO)<br />(Sri Lanka Navy)<br />Tel: +94 71 8499464<br />
          Email: pfsogalle@navy.lk, ispsgalle@gmail.com</td>
        </tr>
        <tr>
          <td><strong>Trincomalee</strong></td>
          <td><strong>Capt. A.M.S.P. Arampath</strong><br />Deputy Harbour Master<br />(Sri Lanka Ports Authority)<br />Tel: +94 26 2222472<br />Email: dhm-trinco@slpa.lk</td>
          <td style="background-color:#AED6F1"><strong>Commodore B. Liyanagama</strong><br />Port Facility Security Officer (PFSO)<br />(Sri Lanka Navy)<br />Tel: +94 26 7766167<br />Email: pfsotco@navy.lk, pfsotco@gmail.com</td>
        </tr>
        <tr>
          <td><strong>Hambanthota</strong></td>
          <td><strong>Capt. P K S K Pattiwila</strong><br />Deputy Harbour Master<br />(Sri Lanka Ports Authority)<br />Tel: +94 72 2972269<br />Email: sugath.pattiwila@gmail.com</td>
          <td style="background-color:#AED6F1"><strong>Commodore E.W.C.E. Mendis</strong><br />Port Facility Security Officer (PFSO)<br />(Sri Lanka Navy)<br />Tel: +94 76 3015037, +94 11 7199100<br />Email: pfsohambantota@gmail.com</td>
        </tr>
        <tr>
          <td><strong>Kankasanthurai</strong></td>
          <td><strong>Overlooked by the Sri Lanka Navy</strong></td>
          <td style="background-color:#AED6F1"><strong>Rear Admiral H.R.F.M. Thissera</strong><br />Port Facility Security Officer (PFSO)<br />(Sri Lanka Navy)<br />Tel: +94 26 77 6101113<br /><br />
          <strong>Lt Commander T.H.C. Isuru</strong><br />Assistant Port Facility Security Officer (APFSO)<br />(Sri Lanka Navy)<br />Tel: +94 71 0932728<br /><br />
          <strong>ISPS Officer</strong><br />Tel: +94 76 3357788<br />Email: pfsokks@navy.lk, pfsokksn@gmail.com</td>
        </tr>
      </tbody>
    </table>
  </center>
  <p>&nbsp;</p>
`;

const Isps = () => {
  return (
    <div className="isps-page">
      <Contactbanner />
      <div className="act-wrapper">
      <div
        className="isps-content"
        dangerouslySetInnerHTML={{ __html: ispsContent }}
      />
      </div>
    </div>
  );
};

export default Isps;
