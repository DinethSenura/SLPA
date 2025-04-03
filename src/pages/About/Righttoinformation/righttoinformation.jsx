import React from 'react';
import './righttoinformation.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import DOMPurify from 'dompurify';
import Aboutbanner from '../../../components/AboutBanner/Aboutbanner';

const berthingprogramme = () => {

  // HTML content for the Right to Information Act section
  const htmlContent = `<p><span style="color:#000000;"><span style="font-size:18px;"><strong>IMPLEMENTATION OF THE RIGHT TO INFORMATION ACT, NO.12 OF 2016</strong></span></span></p>

<div class="col-md-12">
<p class="header_black"><span style="font-size:16px;"><strong>Information Officers</strong></span></p>

<p style="text-align: justify;">The particulars of the Information officers and the Designated officer appointed under section 23 of the Right to Information Act,<br/> No. 12 of 2016 (RTI Act) of the Sri Lanka Ports Authority are as follows:</p>

<p class="header_two"><b>Capt. Harsha Weerasuriya<br />
<small>(Head of the Special Investigation Unit/Deputy Chief Manager - Security) </small></b></p>

<p style="text-align: justify;">(<em>Relevent Divisions:</em>&nbsp;Security Division, Secretariat, Legal Division, Marketing &amp; Business Development Division,<br/> Navigation Division, Information Systems Division, Communication &amp; Public Relations Division and Premises Section)</p>

<p>Special Investigation Unit – SLPA<br />
(Independent Investigation Establishment)<br />
No. 01, Main Entrance Gate Building,<br />
Chaithya Road, Colombo 01.</p>

<p>T.P: +94 11 3075290<br />
Email: rti@slpa.lk<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;hou- siu@slpa.lk</p>
</div>

<hr />

<div class="col-md-12">
<div class="col-md-6">
<p class="header_two"><b>Resident Manager(Galle)</b><br />
(For all information related to the port of Galle)</p>

<p>Galle Harbour<br />
Magalle,<br />
Galle.</p>

<p>T.P: +94 91 2234963<br />
Fax: +94 91 2246494</p>
</div>

<div class="col-md-6">
<p class="header_two"><b>Resident Manager(Trincomalee)</b><br />
(For all information related to the port of Trincomalee)</p>

<p>Trincomalee Harbour<br />
New Administration Building,<br />
Burma Camp,<br />
Chinabay.</p>

<p>T.P: +94 26 2233607<br />
Fax: +94 26 2233601</p>
</div>
</div>

<hr />

<div class="col-md-12">
<div class="col-md-6">
<p class="header_two"><b>Mr. C. L. Dasanayake<br />
<small>(Chief Engineer - Development)</small></b></p>

<p style="text-align: justify;">(<em>Relevent Divisions:</em>&nbsp;Planning &amp; Development Division, Contracts &amp; Designs Division and Development Division)</p>

<p>Development Division<br />
Sri Lanka Ports Authority,<br />
Colombo 01.</p>

<p>T.P: +94 11 2451913<br />
Email: chamindadas@slpa.lk</p>
</div>

<div class="col-md-6">
<p class="header_two"><b>Mr. N. H. Garusinghe<br />
<small>(Dy. Chief Engineer - Mech Plant II)</small></b></p>

<p style="text-align: justify;">(<em>Relevent Divisions:</em>&nbsp;Civil Engineering Division, Electrical &amp; Electronics Engineering Division,Mechanical Works Engineering Division, Mechanical Plant Engineering Division, Marine Enginnering Division and Supplies Division)</p>

<p>Mechanical Plant Engineering Division<br />
45,&nbsp;Leyden Bastian Road<br />
Colombo 01.</p>

<p>T.P: +94 11 2542963<br />
Email: garusinghe@slpa.lk</p>
</div>
</div>

<hr />

<div class="col-md-12">
<div class="col-md-6">
<p class="header_two"><b>Mr. Pradeep Nishantha<br />
<small>(Chief Operations Manager - CC)</small></b></p>

<p>(<em>Relevent Division:</em>&nbsp;Logistics Division)</p>

<p>Logistics Division<br />
One Stop Documentation Center, Cannal Yard,<br />
15, Lotus Road,<br />
Colombo 01.</p>

<p>T.P: +94 11 2542928<br />
Email: pran@slpa.lk</p>
</div>

<div class="col-md-6">
<p class="header_two"><b>Mr. Pradeep Perera<br />
<small>(Chief Manager - Logistics)</small></b></p>

<p>(<em>Relevent Division:</em>&nbsp;Operations Division)</p>

<p>Operations Division<br />
Administration Building,<br />
Kochchikade,<br />
Colombo 13.</p>

<p>T.P: +94 11 2325916<br />
Email: abmaswer@slpa.lk</p>
</div>
</div>

<hr />

<div class="col-md-12">
<div class="col-md-6">
<p class="header_two"><b>Mrs. D. N. Pannipitiya<br />
<small>(Snr. Manager - Finance)</small></b></p>

<p style="text-align: justify;">(<em>Relevent Division:</em>&nbsp;Finance Division, Internal Audit Division)</p>

<p>Finance Division<br />
Chaithya Road,<br />
Colombo 01.</p>

<p>T.P: +94 11 2434439<br />
Email: dilrukshi@slpa.lk</p>
</div>

<div class="col-md-6">
<p class="header_two"><b>Mr. M. B. Manjula Prasad<br />
<small>(Asst. Manager - Administration)</small></b></p>

<p style="text-align: justify;">(<em>Relevent Division:</em>&nbsp;Human Resources Division Division, Welfare &amp; Industrial Relations Division, Medical Division and Mashapola Ports &amp; Maritime Acadamy)</p>

<p>Human Resources Division<br />
Kochchikade,<br />
Colombo 13.</p>

<p>T.P: +94 11 2329592<br />
Email: manjula@slpa.lk</p>
</div>
</div>

<hr />

<div class="col-md-12">
<p class="header_black"><span style="font-size:16px;"><strong>Designated Officer</strong></span></p>

<div class="col-md-6">
<p class="header_two"><b>Mr. D. L. R. Weerasinghe<br />
<small>(AMD - Operations)</small></b></p>

<p>HQ Colombo<br />
5th Floor, 464A,<br />
T. B. Jayah Mawatha,<br />
Colombo 10.</p>

<p>T.P: +94 11 2326659<br />
Email: lalw@slpa.lk</p>
</div>
</div>

<p>&nbsp;</p>

<div class="col-md-12">
<p class="header_black"><strong><span>RTI Forms</span></strong></p>

<div class="col-md-6">
<p>Application to receive information (RTI 01)<br />
(<a href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_09_16759382751675939593.pdf" target="_blank">English</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_09_16759382751675938316.pdf" target="_blank">Sinhala</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_09_16759382751675938369.pdf" target="_blank">Tamil</a>)<br />
<br />
Appeal to the Designated Officer (RTI 10)<br />
(<a href="http://www.parliament.lk/files/rti/form-RTI10-en.pdf" target="_blank">English</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_09_16759382751675938417.pdf" target="_blank">Sinhala</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_09_16759382751675938441.pdf" target="_blank">Tamil</a>)</p>
</div>
</div>

<p>&nbsp;</p>

<div class="col-md-12">
<p class="header_black"><strong><span>Related Downloads</span></strong></p>

<div class="col-md-6">
<p><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2022_04_19_16503547061650354800.pdf" target="_blank">Notice - RTI Commission (SLPA)</a><br />
<a href="http://www.parliament.lk/uploads/acts/gbills/english/6007.pdf" target="_blank">RTI Act, No. 12 of 2016</a><br />
<a href="http://www.parliament.lk/files/rti/regulations-20170203-2004-66-en.pdf" target="_blank">RTI Regulation - Gazette Extraordinary No 2004/66 - 2017-02-03</a><br />
<a download="" href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_12_05_17017532701701753281.docx">Appeal to the RTI Commission Form</a></p>
</div>
</div>

<p>&nbsp;</p>

<p class="header_black"><span style="font-size:16px;"><strong>Proactive Disclosure of Information</strong></span></p>
`;

  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div>
      <div className="header-section">
        <h1>RIGHT TO INFORMATION</h1>
        <p className="path">
        <span></span>HOME
          <span>&gt;</span>ABOUT
          <span>&gt;</span>RIGHT TO INFORMATION
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

      <Aboutbanner />

      <div className="act-wrapper">
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>

    </div>
  );
};

export default berthingprogramme;
