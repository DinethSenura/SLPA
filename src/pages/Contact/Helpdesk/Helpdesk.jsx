import React from 'react';
import '../Helpdesk/helpdesk.css';
import Contactbanner from '../../../components/ContactBanner/Contactbanner';

const htmlContent = `
  <table cellpadding="4" cellspacing="0" style="width:100%">
    <tbody>
      <tr>
        <td><strong>Description</strong></td>
        <td><strong>Duty hours</strong></td>
        <td><strong>Telephone</strong></td>
      </tr>
      <tr><td>SLPA Enquiry Center</td><td>8.30 am - 5.00 pm</td><td>Hotline: +94 1984</td></tr>
      <tr><td>Duty Manager - JCT</td><td>24 hours</td><td>+94 71 4816898</td></tr>
      <tr><td>Duty Officer - Planning</td><td>24 hours</td><td>+94 71 8688362, +94 11 2482553</td></tr>
      <tr><td>Duty Officer - Operations</td><td>24 hours</td><td>+94 11 2483442</td></tr>
      <tr><td>JCT 1 &amp; 2 (Duty Officer)</td><td>24 hours</td><td>+94 71 6810881</td></tr>
      <tr><td>JCT 3 &amp; 4 (Duty Officer)</td><td>24 hours</td><td>+94 71 8688364</td></tr>
      <tr><td>Duty Officer (SLPA - Security Division)</td><td>24 hours</td><td>+94 11 2323219</td></tr>
      <tr><td>JCT Control Room - Vessels (Assistant Unit Superintendent)</td><td>24 hours</td><td>+94 11 2440403, +94 11 2482562</td></tr>
      <tr><td>Yard Planning - Operations</td><td>24 hours</td><td>+94 11 2482780</td></tr>
      <tr><td>JCT Computer (Supervisor)</td><td>24 hours</td><td>+94 11 2482848</td></tr>
      <tr><td>JCT Berthing (Senior Manager)</td><td>8.00 am - 5.00 pm</td><td>+94 11 2325324, +94 71 8688363</td></tr>
      <tr><td>Document Control &amp; Billing (Management Assistant)</td><td>24 hours</td><td>+94 11 2482955, +94 11 2482807</td></tr>
      <tr><td>Operations Room (Assistant Superintendent)</td><td>24 hours</td><td>+94 11 2482557</td></tr>
      <tr><td>Duty Manager - Information Systems</td><td>24 hours</td><td>+94 11 2440410</td></tr>
      <tr><td>SAGT- CITO</td><td>24 hours</td><td>+94 11 2483423, +94 11 2457427</td></tr>
      <tr><td>Hardware / Software Faults in SLPA Systems</td><td>24 hours</td><td>+94 11 2482626 or Ext. 2626</td></tr>
    </tbody>
  </table>
`;

const Helpdesk = () => {
  return (
    <div className="helpdesk-page">
      <Contactbanner />
      <div className="act-wrapper">
      <div
        className="helpdesk-content"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      </div>
    </div>
  );
};

export default Helpdesk;