import React from 'react';
import './localpurchases.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';

const Localpurchasese = () => {
  const content = `
<div>
    <div>
    <center>
    <table border="1" cellpadding="4" cellspacing="0" class="table table-hover" style="width:100%">
    <tbody>
    <tr>
    <td><strong>File Number</strong></td>
    <td><strong>Description</strong></td>
    <td><strong>Bid Amount (Rs.)</strong></td>
    <td><strong>Closing Date</strong></td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/09/0207</td>
    <td>DS SAE 50 Lubricating Oil. ( URGENT PURCHASE )<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508386988.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>20/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/07/SQ/07/188</td>
    <td>TWO T OIL LANKA - P125 ( 500 ml Can )</td>
    <td>&nbsp;</td>
    <td>23/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/09/0205</td>
    <td>Shackle Galvanized Iron</td>
    <td>&nbsp;</td>
    <td>23/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/01/0179</td>
    <td>SAFETY HELMETS WITH CHIN STRAP</td>
    <td>&nbsp;</td>
    <td>23/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/10/193</td>
    <td>Fan Bearing 6203ZZ</td>
    <td>&nbsp;</td>
    <td>23/10/2017 13.30hrs.</td>
    </tr>
    <tr><td>CMS/LP/17/SQ/10/194</td>
    <td>HEMPADUR PRIMER RED 15570 50630</td>
    <td>&nbsp;</td>
    <td>23/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/01/0001</td>
    <td>Acetylene Regulators &amp; Oxygen Regulators<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_11_15076892771507696079.pdf ">
    <i class="fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>24/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/17/036-A</td>
    <td>SMALL TOOLS<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_16_15081268751508131129.pdf ">
    <i class= "fa fa-download ">
    </i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>24/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/12/099</td>
    <td>CENTRIFUGAL FAN WITH MOTOR<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_11_15076892771507696317.docx ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>25/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/02/15</td>
    <td>MITER SAW<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_16_15081268751508131129.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>25/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/07/014</td>
    <td>TORQUE RINCH 750NM (MAX)<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_16_15081268751508131343.pdf">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>25/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/17/026</td>
    <td>WELDING TRANSFORMERS<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_16_15081268751508131656.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>10,000.00</td>
    <td>25/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/08/0186<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508218182.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>Air Filters</td>
    <td>&nbsp;</td>
    <td>25/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/09/016</td>
    <td>Nitrogen Regulator<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508219206.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>25/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/10/199</td>
    <td>CALTEX DELO 1000 MARINE SAE 40<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508218376.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>16,500.00</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/10/197</td>
    <td>GREASE MP-2<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508218376.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>8,500.00</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/10/198</td>
    <td>DS SAE 40<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508218925.doc ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>13,400.00</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/16/175</td>
    <td>RUBBER SPLICING HV INSULATION TAPE 20MMX30F<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508219100.docx ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/10/195</td>
    <td>GREASE CALTEX MULTIFAC EP02<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_17_15082174091508219206.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/14/200</td>
    <td>Steel Grade 8.8 Nut &amp; Bolt with Spring &amp; Flat Washer M 24 x 75 mm, HEX.HEAD (All items hot dipped galvanize)</td>
    <td>&nbsp;</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/11/0120</td>
    <td>SAW BELT 5&quot; ,50m ROLL</td>
    <td>&nbsp;</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/13/199</td>
    <td>MOTOR TUBES<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508387741.pdf ">
    <i class= "fa fa-download "></i> spec-1</a>&nbsp;
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508387760.pdf ">
    <i class= "fa fa-download ">
    </i> spec-2</a></td>
    <td>&nbsp;</td>
    <td>26/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/02/199</td>
    <td>PRE FILTER FUEL OIL FILTER N6105A<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_20_15084786511508481958.docx ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>27/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/02/200</td>
    <td>700X12 , 825X15 TYRE FLAPS &amp; 825X15 MOTOR TUBES<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_20_15084786511508482296.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>27/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/03/011</td>
    <td>Jack Trolley 15 Ton<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508386988.pdf ">
    <i class= "fa fa-download ">
    </i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>31/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/03/179</td>
    <td>MOTOR TYRES 600X16 6PLY<br />
    <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508386988.pdf ">
    <i class= "fa fa-download "></i> spec-1</a></td>
    <td>&nbsp;</td>
    <td>31/10/2017 13.30hrs.</td>
    </tr>
    <tr>
    <td>CMS/LP/17/SQ/09/0209</td>
    <td>BELZONA</td>
    <td>&nbsp;</td>
    <td>09/11/2017 13.30hrs.</td>
    </tr>
    </tbody>
    </table>
    <p>&nbsp;</p>
    </center>  
    </div>

    <div>

    <center>
      <table border="1" cellpadding="4" cellspacing="0" class="table table-hover" style="width:100%">
      <tbody><tr><td><strong>&nbsp;File Number</strong></td>
      <td><strong>Description</strong></td>
      <td><strong>Bid Amount<br />
      (Rs.)</strong></td>
      <td><strong>Closing Date</strong></td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/12/193</td>
      <td>CELLOTAPE ROLL 50mm WIDE 50M LONG</td>
      <td>&nbsp;</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/14/194</td>
      <td>CASING PVC</td>
      <td>&nbsp;</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/13/197</td>
      <td>LEATHER BAGS CIRCUIT 3 COMPARTMENTS</td>
      <td>8,620.00</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/03/189</td>
      <td>WATER SAND PAPER NO.100 (11&quot;X9&quot;)</td>
      <td>&nbsp;</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/14/197</td>
      <td>PHOTOCOPY PAPER A4 SIZE 80GSM (500 SHEE</td>
      <td>14,580.00</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/11/0210</td>
      <td>COTTON RAGS (BANIAN WASTE - BUNDLED BY STITCHING)</td>
      <td>9,400.00</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/SQ/03/190</td>
      <td>GENERAL HARDWEAR ITEMS ( URGENT PURCHEASE )</td>
      <td>&nbsp;</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/FQ/02/205</td>
      <td>HARDWARE ITEMS - URGENT PURCHASE</td>
      <td>&nbsp;</td>
      <td>20/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/09/0204</td>
      <td>Mattress Covers</td>
      <td>&nbsp;</td>
      <td>23/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/12/194</td>
      <td>PVC CABLE SINGLE CORE 7/0.50mm<br />
      <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_11_15076892771507695842.docx ">spec-1</a></td>
      <td>&nbsp;</td>
      <td>23/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/16/SQ/09/0126</td>
      <td>Rubber Studed Carpet.</td>
      <td>&nbsp;</td>
      <td>23/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/01/0171</td>
      <td>BED SHEETS &amp; PILLOWCASES</td>
      <td>&nbsp;</td>
      <td>24/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/13/147</td>
      <td>LAVATORY BRUSHES</td>
      <td>&nbsp;</td>
      <td>24/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/11/008</td>
      <td>Bluray Player<br />
      <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_16_15081268751508131343.pdf ">spec-1</a></td>
      <td>&nbsp;</td>
      <td>25/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/13/137</td>
      <td>CANVAS GLOVES, SHORT</td>
      <td>&nbsp;</td>
      <td>25/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/FQ/09/0102</td>
      <td>Partitioning Fabric</td>
      <td>&nbsp;</td>
      <td>25/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/12/195</td>
      <td>ZN-AL<br />
      <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508388045.pdf ">spec-1</a></td>
      <td>&nbsp;</td><td>27/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/03/197</td>
      <td>ZN - AlUMINIUM SHEET<br />
      <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_19_15083863401508388045.pdf ">spec-1</a></td>
      <td>&nbsp;</td>
      <td>27/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/16/201</td>
      <td>PAINT &amp; THINNER</td>
      <td>&nbsp;</td>
      <td>27/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/02/188</td>
      <td>WATER SEAL 24MM<br />
      <a href= "http://www.slpa.lk/uploads/article_attachment/attachment_2017_10_20_15084786511508480479.doc ">spec-1</a></td>
      <td>&nbsp;</td>
      <td>27/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/PT/12/07</td>
      <td>50 Nos. Fire Fighting Boots</td>
      <td>&nbsp;</td>
      <td>31/10/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/SQ/09/0208</td>
      <td>Fertilizer Compost</td>
      <td>&nbsp;</td>
      <td>06/11/2017 13.30hrs.</td>
      </tr>
      <tr>
      <td>CMS/LP/17/PT/08/0023</td>
      <td>Supply of MS Lip Channels for the New Warehouse at Trincomalee</td>
      <td>50,000.00</td>
      <td>09/11/2017 13.30hrs.</td>
      </tr>
      <tr><td>CMS/LP/17/SQ/09/0210</td>
      <td>PAINT ENAMEL WHITE</td>
      <td>&nbsp;</td>
      <td>09/11/2017 13.30hrs.</td>
      </tr>
      </tbody>
      </table>
    </center>
    </div>
</div>
  `;

  return (
    <div className="local-purchases-container">
        <div className="header-section">
          <h1>BOARD OF DIRECTORS</h1>
          <p className="path">
          <span></span>HOME
              <span>&gt;</span>ABOUT
              <span>&gt;</span>BOARD OF DIRECTORS
          </p>
          <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
        </div>


        <div className="act-wrapper">
            <div className="local-purchase-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    </div>
  );
};

export default Localpurchasese;
