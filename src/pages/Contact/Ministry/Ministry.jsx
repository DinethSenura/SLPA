import React from 'react';
import '../Ministry/ministry.css';
import Contactbanner from '../../../components/ContactBanner/Contactbanner';

// Paste your entire HTML block here
const ministryContent = `
  <p>&nbsp;</p>
  <div class="row">
    <div class="col-md-6">
      <div class="col-md-4">
        <img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2025_01_01_1735735332.jpg" />
      </div>
      <div class="col-md-8">
        <div class="col-md-12">
          <h5><strong>Hon. Bimal Rathnayake</strong></h5>
          <h6><strong>(Minister of Transport, Highways, Ports &amp; Civil Aviation)</strong></h6>
        </div>
        <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2439375</span></div>
        <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2435161</span></div>
      </div>
    </div>

  <div class="col-md-6">
  <div class="col-md-4">
  <img alt="" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2025_01_01_1735733881.jpg" />
  </div>
  
  <div class="col-md-8">
  <div class="col-md-12">
  <h5><strong>Hon. Janitha Ruwan Kodithuwakku</strong></h5>
  <h6><strong>(Deputy Minister of Ports &amp; Civil Aviation)</strong></h6>
  </div>
  </div>
  </div>
  </div>
  <hr />
  <p><span style="font-size:16px"><strong>Secretary Office</strong></span></p>
  <p>&nbsp;</p><div class="row">
  <div class="col-md-6">
  <div class="col-md-4">
  <img alt="Secretary to the Ministry" class="img-responsive" src="https://www.slpa.lk/uploads/article/article_image_ext_2024_11_20_1732095537.jpg" style="width:100%" /></div>
  <div class="col-md-8">
  <div class="col-md-12">
  <h5><strong>Senior Prof. Kapila C.K. Perera</strong></h5>
  <h6><strong>(Secretary to the Ministry)</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2431789</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;4472789</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2435134</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Intercom: 205</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;secretary@portmin.gov.lk</span></div>
  </div>
  </div></div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-4">&nbsp;</div>
  <div class="col-md-8">
  <div class="col-md-12">
  <h5><strong>Mr. D.M. Rajitha Dimutha</strong></h5>
  <h6><strong>(Co-Sec to the Secretary)</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2431768</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;1133357</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Intercom: 232</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;rajithadimutha@gmail.com</span>
  </div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-4">&nbsp;</div>
  <div class="col-md-8">
  <div class="col-md-12">
  <h5><strong>P/A to the Secretary</strong></h5>
  </div><div class="col-md-12">
  <span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2320252</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Fax:&nbsp;+94&nbsp;11&nbsp;2435134</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Intercom: 201</span></div></div>
  </div>
  </div>
  <p>&nbsp;</p>
  <hr />
  <p><span style="font-size:16px"><strong>Hon. Minister&#39;s Staff</strong></span></p>
  <p>&nbsp;</p>
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. Lahiru Madusanka Zoysa</strong></h5>
  <h6><strong>(Coordinating Secretary)</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">Mob: +94&nbsp;77&nbsp;8104848&nbsp;/&nbsp;+94&nbsp;71&nbsp;4033788</span>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">Ext: 224</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Email:&nbsp;lahiru.madusanka02@gmail.com</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. Abdul Azzez Abdul Wajith</strong></h5>
  <h6><strong>(Coordinating Secretary)</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;9593829</span>
  </div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. Malkanthi Jayarathna</strong></h5>
  <h6><strong>(Public Relations Officer)</strong></h6>
  /div>
  <div class="col-md-12">
  <span style="font-size:12px;">Mob: +94&nbsp;77&nbsp;3525177</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. Suranga Lakmal Senevirathne</strong></h5>
  <h6><strong>(Media Secretary)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 226</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;surangasls18@gmail.com</span></div>
  </div>
  </div>
  </div>
  <p>&nbsp;</p>
  <hr />
  <p><span style="font-size:16px"><strong>Hon. Deputy Minister&#39;s Staff</strong></span></p>
  <p><span style="font-size:14px"><strong>(Ports and Civil Aviation)</strong></span></p>
  <p>&nbsp;</p>
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. Lasantha Buddika Kularathna</strong></h5>
  <h6><strong>(Private Secretary)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2438344</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;3655349</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 246</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;kularathnalasantha8@gmail.com</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. Lakmal Siriwardhana</strong></h5>
  <h6><strong>(Coordinating Secretary)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2435161</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;76&nbsp;1015020</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2439375</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 204</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;cslakmal01@gmail.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Miss. Sanduni Medawaththa</strong></h5>
  <h6><strong>(Public Relations Officer)</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2439353</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;77&nbsp;5986104</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2439353</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 215</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;nuwanthikamed4@gmail.com</span></div>
  </div>
  </div>
  </div>
  <p>&nbsp;</p>
  <hr />
  <p><span style="font-size:16px"><strong>Admin Unit</strong></span></p>
  <p>&nbsp;</p>
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5>&nbsp;</h5>
  <h6><strong>(Additional Secretary - Administration &amp; Finance )</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2431656</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Fax:&nbsp;+94&nbsp;11&nbsp;2542689</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Ext: 206</span></div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. D.N. Hettiarachchi</strong></h5>
  <h6><strong>(Senior Asst. Secretary)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2470329</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;8287883</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax:&nbsp;+94&nbsp;11&nbsp;2389598</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 212</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;dn_hettiarachchi@yahoo.com</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs C. N. Pankandurugama</strong></h5>
  <h6><strong>(Legal Officer)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2431767</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;1545149</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 202</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;sperera1233@gmail.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. K.P.S.R.Dayarathne</strong></h5>
  <h6><strong>(Administrative Officer)</strong></h6>
  </div>
  <div class="col-md-12">
  <span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2388779</span></div>
  <div class="col-md-12">
  <span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 4471666</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax:&nbsp;+94&nbsp;11&nbsp;2388779</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 237</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;sanjayarukmandayarathna@gmail.com</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. M.G.N. Priyanthi Jayakody</strong></h5>
  <h6><strong>(Chief Mgt. Service Officer)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2435145</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 8036171</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 211</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;portshippingad@gmail.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <p><span style="font-size:16px"><strong>Development Section</strong></span></p>
  <p>&nbsp;</p>
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. E.M.S.B.Jayasundara</strong></h5>
  <h6><strong>(Additional Secretary (Development))</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2395119</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 9288900</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp; 2322648</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 236</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;adsecdev@portmin.gov.lk</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. H. R. Sirinama</strong></h5>
  <h6><strong>(Director(Development))</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp;2542684</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp;3020676</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp;2542684</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 229</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;hsirinama@yahoo.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. R. P. Hettiarachchi</strong></h5>
  <h6><strong>(Director (Planning))</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;70&nbsp;2440152</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;11&nbsp;2222030</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp; 2440152</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 245</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;rph2271968@gmail.com</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. H.A.R.P. Fernando</strong></h5>
  <h6><strong>(Deputy Director(Planning))</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2431781</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 8067808</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 233</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;mpsdev.prog@gmail.com </span></div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. K.M.H Nilakshi</strong></h5>
  <h6><strong>(Assistant Director(Development))</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2542687</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 5439004</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 234</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;kmharshikanilakshi@gmail.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <p><span style="font-size:16px"><strong>Accounts Section</strong></span></p>
  <p>&nbsp;</p>
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. W.S. Pushparani</strong></h5>
  <h6><strong>(Chief Finance Officer)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2421402</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;77&nbsp; 0298311</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp; 2387679</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 227</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;pushparaniwd@gmail.com</span></div>
  </div>
  </div>
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. J.R. Randeniya</strong></h5>
  <h6><strong>(Chief Accountant)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2542554</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 7452727</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 230</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;randeniya1968@gmail.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mrs. H.M.D.D. Handapangoda</strong></h5>
  <h6><strong>(Accountatnt)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2431788</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;76&nbsp; 2044125</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 218</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;hdinushka@yahoo.com</span></div>
  </div>
  </div>
  </div>
  <hr />
  <p><span style="font-size:16px"><strong>Internal Audit Unit</strong></span></p>
  <p>&nbsp;</p>
  <div class="row">
  <div class="col-md-6">
  <div class="col-md-12">
  <div class="col-md-12">
  <h5><strong>Mr. K.W.G.N.P. Wijesiri</strong></h5>
  <h6><strong>(Chief Internal Auditor)</strong></h6>
  </div>
  <div class="col-md-12"><span style="font-size:12px;">T.P: +94&nbsp;11&nbsp; 2320667</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Mob: +94&nbsp;71&nbsp; 8607417</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Fax: +94&nbsp;11&nbsp; 2320667</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Ext: 241</span></div>
  <div class="col-md-12"><span style="font-size:12px;">Email:&nbsp;pathumal84@gmail.com</span></div>
  </div>
 </div>
</di>
`;

const Ministry = () => {
  return (
    <div className="ministry-page">
      <Contactbanner />
      <div
        className="ministry-content container"
        dangerouslySetInnerHTML={{ __html: ministryContent }}
      />
    </div>
  );
};

export default Ministry;
