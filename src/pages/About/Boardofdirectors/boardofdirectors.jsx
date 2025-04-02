import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import './boardofdirectors.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';
import Aboutbanner from '../../../components/AboutBanner/Aboutbanner'

const BoardOfDirectors = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const apiData = {

            title: "Board Of Directors",
      sub_title: "",
      image: "article_image_2016_04_27_1461722881.jpg",
      content: `<div class="row">
      <h2>Board Of Directors</h2>
<div class="col-md-6">
<div class="col-md-4"><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2024_10_03_1727947468.jpg" style="width:150%" /></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong>Admiral Sirimewan Ranasinghe &nbsp;<span style="font-size:9px;">(Rtd)<br />
WWV, RWP, VSV,USP</span></strong></h5>

<h6><strong>(Chairman)</strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2325559</span><br />
<span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2451916</span></div>

<div class="col-md-12"><span style="font-size:12px;">chairman@slpa.lk</span></div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><strong><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2024_10_04_1728027763.jpg" style="width:150%" /></strong></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><a href="vicechairman"><strong>Eng. Herath M.P. Jayawardhana</strong></a></h5>

<h6><strong><strong>(Vice Chairman)</strong></strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2380849</span><br />
<span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2344766</span></div>

<div class="col-md-12"><span style="font-size:12px;">vc@slpa.lk</span></div>
</div>
</div>
</div>

<hr />
<div class="row">
<div class="col-md-6">
<div class="col-md-4"><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2025_03_07_1741333134.jpg" style="width:150%" /></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong>Mr. Ganaka Hemachandra</strong></h5>

<h6><strong>(Managing Director)</strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2323213<br />
Fax: +94&nbsp;11&nbsp;2435637</span></div>

<div class="col-md-12"><span style="font-size:12px;">md@slpa.lk</span></div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2022_08_15_1660558111.jpg" style="width:150%" /></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong><strong><strong>Mr. P. B. S. C. Nonis</strong></strong></strong></h5>

<h6><strong><strong><strong>(Director)</strong></strong></strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2143434<br />
Fax: +94&nbsp;11&nbsp;2446364</span></div>

<div class="col-md-12"><span style="font-size:12px;">dgc@customs.gov.lk</span></div>
</div>
</div>
</div>

<hr />
<div class="row">
<div class="col-md-6">
<div class="col-md-4"><img alt="Director Port Authority" class="img-responsive" src="" /></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong><strong><strong><strong><strong>Mrs. R. M. Damihta Kumari Rathnayake</strong></strong></strong></strong></strong></h5>

<h6><strong>(Director - representing Treasury)</strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2484617<br />
Fax: +94&nbsp;11&nbsp;2484624</span></div>

<div class="col-md-12"><span style="font-size:12px;">kumari.rm@tod.treasury.gov.lk<br />
damitharm@gmail.com</span></div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><strong><strong><img alt="Director port authority" class="img-responsive" src="../uploads/article/article_image_ext_2020_02_05_1580886256.JPG" /></strong></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong><strong><strong>Mrs. N.A.A.P.S. Nissanka</strong></strong></strong></h5>

<h6><strong><strong><strong>(Director)</strong></strong></strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2441537<br />
Fax: +94&nbsp;11&nbsp;2445088</span></div>

<div class="col-md-12"><span style="font-size:12px;">nissankaapsara@gmail.com</span></div>
</div>
</div>
</div>

<hr />
<div class="row">
<div class="col-md-6">
<div class="col-md-4"><strong><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2024_01_30_1706609496.jpg" /></strong></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong>Mr. E. M. S. B. Jayasundara</strong></h5>

<h6><strong>(Director)</strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2395119<br />
Fax: +94&nbsp;11&nbsp;2322648</span></div>

<div class="col-md-12"><span style="font-size:12px;">emsbshantha800@gmail.com</span></div>
</div>
</div>

<div class="col-md-6">
<div class="col-md-4"><strong><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2022_11_04_1667558292.jpg" /></strong></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong>Mr. Upul Jayatissa</strong></h5>

<h6><strong>(Director)</strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">Mobile: +94&nbsp;071&nbsp;8688322</span></div>

<div class="col-md-12"><span style="font-size:12px;">jayatissaupul@gmail.com</span></div>
</div>
</div>
</div>

<hr />
<div class="row1">
<div class="col-md-6">
<div class="col-md-41"><strong><strong><img alt="Director port authority" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2024_10_23_1729665485.jpg" /></strong></strong></div>

<div class="col-md-8">
<div class="col-md-12">
<h5><strong>Mr. U. L. Anura Bandara</strong></h5>

<h6><strong>(Director)</strong></h6>
</div>

<div class="col-md-12"><span style="font-size:12px;">Mobile: +94&nbsp;071&nbsp;8688359</span></div>

<div class="col-md-12"><span style="font-size:12px;">udawela1967@hotmail.com</span></div>
</div>
</div>
</div>

<p>&nbsp;</p>

<hr />
<p class="under-title"><strong><strong><span style="font-size:28px"><strong>Secretary to the Board &nbsp;</strong></span></strong></strong></p>

<p>&nbsp;</p>

<div class="row">
<div class="col-md-6">
<div class="col-md-12">
<div class="col-md-12-2">
<h5><strong>Mrs. Shehara Y. Nawaratne</strong></h5>
</div>

<div class="col-md-12-2"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2421530<br />
Fax: +94&nbsp;11&nbsp;2421530</span></div>

<div class="col-md-12-2"><span style="font-size:12px;">boardroom@slpa.lk</span></div>
</div>
</div>
</div>`

        };

        setHtmlContent(DOMPurify.sanitize(apiData.content));
    }, []);

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

            {/* Inject API content safely */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default BoardOfDirectors;