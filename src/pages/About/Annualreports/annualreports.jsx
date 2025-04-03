import React from 'react';
// import { Link } from 'react-router-dom';
import '../Annualreports/annualreports.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import DOMPurify from 'dompurify'; // Import DOMPurify
import AboutBanner from "../../../components/AboutBanner/Aboutbanner"

const berthingprogramme = () => {
  const htmlContent = `<p>&nbsp;</p>

<div class="row">
<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article_attachment/attachment_2024_12_26_17352123961735214392.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong><a href="https://www.slpa.lk/application_resources/other/2023-annual_report.pdf" target="_blank">Annual Report - 2023</a></strong></span><br />
<span style="font-size:16px;"><strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2023_11_03_1698996554.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/2022.pdf" target="_blank">Annual Report - 2022</a></strong></span><br />
<span style="font-size:16px;"><strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>
</div>

<hr />
<div class="row">
<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2024_07_09_1720527070.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2023_02_06_16756683311675668600.pdf" target="_blank">Annual Report - 2021</a></strong></span><br />
<span style="font-size:16px;"><strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article_attachment/attachment_2023_09_22_16953637571695364407.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/2020.pdf" target="_blank">Annual Report - 2020</a></strong></span><br />
<span style="font-size:16px;"><strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>
</div>

<hr />
<div class="row">
<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2023_02_06_1675668120.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong>&quot;Moving the World&quot;</strong></span><br />
<span style="font-size:16px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/2019.pdf" target="_blank">Annual Report - 2019</a></strong><br />
<strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2023_02_06_1675665198.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong>&quot;Endless Possibilities&quot;</strong></span><br />
<span style="font-size:16px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/2018.pdf" target="_blank">Annual Report - 2018</a></strong><br />
<strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>
</div>

<hr />
<div class="row">
<div class="col-md-6">
<div class="col-md-4"><img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2023_02_06_1675665059.jpg" width="150%" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5 style="text-align: center;"><span style="font-size:18px;"><strong>&quot;Ready for the World&quot;</strong></span><br />
<span style="font-size:16px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/2017.pdf" target="_blank">Annual Report - 2017</a></strong><br />
<strong>Sri Lanka Ports Authority</strong></span></h5>
</div>
</div>
</div>
</div>`;
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div>
      <div className="header-section">
        <h1>ANNUAL REPORTS</h1>
        <p className="path">
          {/* <Link to="/Home">HOME</Link> */}
          <span></span>HOME
          <span>&gt;</span>ABOUT
          <span>&gt;</span>ANNUAL REPORTS
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>
       
       <AboutBanner />
       
      <div>
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
      </div>
  );
};

export default berthingprogramme;