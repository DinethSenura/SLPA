import React from 'react';
import './slpa.css'; 
import { Link } from 'react-router-dom';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg'; 

const Slpa = () => {
  return (
    <div className="ports-container">
      <div className="header-section">
        <h1>SLPA</h1>
        <p className="path">
        <span></span>HOME
          <span>&gt;</span>ABOUT
          <span>&gt;</span>SLPA
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

    
      <div className="small-boxes-container">
        {[
          { title: "SLPA", path: "/Slpa" },
          { title: "Vision and Mission", path: "/Visionmission" },
          { title: "Board of Directors", path: "/Boardofdirectors" },
          { title: "ACT", path: "/Act" },
          { title: "Procedures", path: "/Procedures" },
          { title: "Circular", path: "/Circlulars" },
          { title: "Awards", path: "Awards" },
          { title: "Annual Reports", path: "Annualreports" },
          { title: "Tariff", path: "Tariff" },
          { title: "Right to Information", path: "Righttoinformation" }
        ].map((box, i) => (
          <Link to={box.path} key={i} className="small-box-link">
            <div className="small-box">
              {box.title}
            </div>
          </Link>
        ))}
      </div>

      
      <div>
        <h4 style={{ color: '#236F86' }}>
          <strong>Ports managed by SLPA</strong>
        </h4>

        <p> </p>

        <h4 style={{ color: '#236F86' }}> </h4>

        <div className="his_con">
          <div className="his video-container">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              height="444"
              scrolling="yes"
              src="https://www.youtube.com/embed/jvRH8dcbLpg"
              title="YouTube video player"
              width="790"
            ></iframe>
          </div>

          <div className="his history-container">
            <h4 style={{ color: '#236F86' }}>
              <strong>History</strong>
            </h4>

            <p style={{ textAlign: 'justify' }}>
              Since 1918, the Port of Colombo had been administered by the Colombo Port Commission, a Government Department which was made responsible for the supply and maintenance of cargo-handling equipment and other infrastructure, pilotage services, docking, and slipping. The government had funded all its activities. Stevedoring and shore handling activities were in the hands of several private wharfage companies. In 1958, the Port Cargo Corporation was set up to take over these activities performed by a multiplicity of operators. The Port Tally and Protective Services Corporation was formed in 1967 in order to perform on-board tallying and watchmen services on behalf of Agents.
            </p>

            <p style={{ textAlign: 'justify' }}>
              The Sri Lanka Ports Authority was constituted under the provisions of the Sri Lanka Ports Authority Act, No. 51 of 1979 (subsequently amended by Act No. 7 of 1984 and Act No. 35 of 1984) on the 1st of August 1979, effecting the merger of the Colombo Port Commission Department and the two existing statutory Corporations. This resulted in a unified organization with a streamlined structure. The Ports Authority does not receive financial allocations from the government but operates on its own revenue and resources.
            </p>

            <p> </p>
          </div>
        </div>

        
     <div className='abouttable'>

     <h4 style={{ color: '#236F86', marginBottom: '20px' }}>
          <strong>Milestones</strong>
        </h4>
        <table  cellPadding="2" cellSpacing="4" width="100%" border="1">
          <tbody >
            <tr><td>1505</td><td>Port of Colombo was known to the Western World</td></tr>
            <tr><td>1912</td><td>Colombo Port was converted to a sheltered harbour</td></tr>
            <tr><td>1913</td><td>Colombo Port Commission Established</td></tr>
    <tr><td>1954</td><td>Inauguration of the Queen Elizabeth Quay</td></tr>
    <tr><td>1954</td><td>Completion of 16 alongside berths, transit sheds, and warehouses</td></tr>
    <tr><td>1958</td><td>Port (Cargo) Corporation was founded</td></tr>
    <tr><td>1979</td><td>Sri Lanka Ports Authority was Formed</td></tr>
    <tr><td>1980</td><td>Inauguration Queen Elizabeth Terminal</td></tr>
    <tr><td>1982</td><td>Opening of New Bridge (Hartal Bridge over the Harbour Canal)</td></tr>
    <tr><td>1982</td><td>Installation of first Gantry Crane</td></tr>
    <tr><td>1985</td><td>Jaye Container Terminal - I was Built</td></tr>
    <tr><td>1987</td><td>Jaye Container Terminal - II was Built</td></tr>
    <tr><td>1995</td><td>Jaye Container Terminal - III was Built</td></tr>
    <tr><td>1996</td><td></td></tr>
    <tr><td>2001</td><td>Commencement of the feasibility study for Port of Hambantota and inauguration of the new training Institute and project Office</td></tr>
    <tr><td>2002</td><td>Inauguration of the Ashraff Quay (multi purpose Alongside Berth) in the Port of Trincomalee</td></tr>
    <tr><td>2003</td><td>Inauguration of Customer service Centre for LCL and break-bulk cargo</td></tr>
    <tr><td>2003</td><td>Opening of SLPA Maritime Museum</td></tr>
    <tr><td>2003</td><td>Ceremonial inauguration of Unity container Terminal with the completion of the civil works</td></tr>
    <tr><td>2003</td><td>Ceremonial inauguration of container handling operations at Unity Container Terminal</td></tr>
    <tr><td>2004</td><td>The Port of Colombo has crossed the 2.2 million TEUs marks for the year 2004</td></tr>
    <tr><td>2005</td><td>Commencement of constructions of the Port and Housing Scheme in Oluwil</td></tr>
    <tr><td>2005</td><td>Handled 2.45 million TEUs and achieved 10.6% against year 2004</td></tr>
    <tr><td>2006</td><td>Commissioning of Container security Initiative and Megaport Initiative in the POC</td></tr>
    <tr><td>2006</td><td>Signing of MOU for the proposed CMB Port Expansion project</td></tr>
    <tr><td>2006</td><td>Signing of MOU concerning detailed design works of Hambantota Port Dev. Project</td></tr>
    <tr><td>2006</td><td>Handling of Three Million Containers in the Port of Colombo</td></tr>
    <tr><td>2007</td><td>Commencement of Construction work of the Hambantota Port Dev. Project</td></tr>
    <tr><td>2008</td><td>Commencement of Construction work of Oluvil Port Project</td></tr>
    <tr><td>2008</td><td>Commencement of Construction work of Colombo Port Expansion Project</td></tr>
    <tr><td>2008</td><td>Signing of Contract agreement for construction of Bunkering facility and Tank farm at Hambantota</td></tr>
    <tr><td>2009</td><td>Signing of MOU with APL shipping line</td></tr>
    <tr><td>2009</td><td>Commencement of New Terminal Management IT System (NAVIS)</td></tr>
    <tr><td>2010</td><td>Ceremony of Sea Water filling to the Basin of Magampura Port (Hambantota) - 15-08-2010</td></tr>
    <tr><td>2010</td><td>Ceremonial inauguration of cargo handling operations at Magampura Port (Hambantota) - 18-11-2010</td></tr>
    <tr><td>2010</td><td>Handling of 2 Million Containers at the Jaya Container Terminal - (JCT)</td></tr>
    <tr><td>2010</td><td>Handling of 4 Million Containers at the port of Colombo</td></tr>
    <tr><td>2011</td><td>Arrival of 06 Nos. New Gantry Cranes and 30 Nos. Transfer Cranes</td></tr>
    <tr><td>2011</td><td>Capacity enhancement at colombo Oil Terminal of SLPA</td></tr>
    <tr><td>2011</td><td>Arrival of 50 Nos. Terminal Tractors</td></tr>
    <tr><td>2011</td><td>Arrival of 2nd Batch of Terminal Equipment - 03 Nos Gantry Cranes & 11 Nos. Transfer Cranes</td></tr>
    <tr><td>2011</td><td>Signing of Agreement for Colombo Port Expansion Project - South Container Terminal</td></tr>
    <tr><td>2011</td><td>Ground Breaking Ceremony at Magam Ruhunupura Mahinda Rajapaksha Port to open new business ventures</td></tr>
    <tr><td>2011</td><td>Ground Breaking Ceremony for commencement of construction work of Colombo South Container Terminal</td></tr>
    <tr><td>2012</td><td>Commencement of handling Ro - RO Vessels at Magam Ruhunupura Mahinda Rajapaksha Port</td></tr>
    <tr><td>2012</td><td>Replacing the dilapidated existing bunker fuel pipe line from the Bloemendhal Oil Terminal to the Port of Colombo</td></tr>
    <tr><td>2013</td><td>Vision 2020 - The corporate plan of Sri Lanka Ports Authority (SLPA) was launched</td></tr>
    <tr><td>2013</td><td>Ceremonial Inauguration of the Colombo Port Expansion Project with a monumental breakwater of 6.8 k.m. and the 1st Terminal - (Colombo International Container Terminal (CICT))</td></tr>
    <tr><td>2013</td><td>Ceremonial Inauguration of Port of Oluvil</td></tr>
    <tr><td>2013</td><td>Implementation of Import FCL Module of Cargo Management System</td></tr>
    <tr><td>2013</td><td>Ceremonial Inauguration of Administration Building at MRMR Port</td></tr>
    <tr><td>2014</td><td>Colombo International Container Terminal (CICT) fully operational in April</td></tr>
    <tr><td>2014</td><td>Implementation of Vessel Traffic Management System (VTMS) in May</td></tr>
    <tr><td>2014</td><td>Ceremonial Inauguration of Tank Farm Complex and Bunkering Terminal at Magam Ruhunupura Mahinda Rajapaksa Port - 22.06.2014</td></tr>
    <tr><td>2014</td><td>Ceremonial Inauguration of Administration Building at MRMR Port</td></tr>
    <tr><td>2014</td><td>Opening of New Fire Brigade Building - 01.08.2014 - Port of Colombo</td></tr>
    <tr><td>2014</td><td>Arrival of 02 Gantry Cranes and 02 Tugs at MRMR Port</td></tr>
    <tr><td>2014</td><td>Inauguration of the Colombo Port City development project - 17.09.2014</td></tr>
    <tr><td>2015</td><td>Handling of 05 Millionth containers by the Port of Colombo</td></tr>
    <tr><td>2016</td><td>Opening of New CFS Stage 1 Port of Colombo</td></tr>
    <tr><td>2016</td><td>Launched SLPA new Web site - 10.08.2016</td></tr>
    <tr><td>2017</td><td>Operations of Fully Re-constructed Container Freight Station 01 (CFS 1)</td></tr>
    <tr><td>2017</td><td>Concession Agreement between SLPA and CM Port for Port Operations of the Port of Hambantota signed</td></tr>
    <tr><td>2017</td><td>The First Public Private Partnership for Port Operation inaugurated</td></tr>
    <tr><td>2017</td><td>SLPA hosts the 19th Symposium on International Network of Affiliated Ports (INAP) Conference</td></tr>
    <tr><td>2017</td><td>Signing of Shareholders Agreement & Land Lease Agreement of the Port of Hambantota</td></tr>
    <tr><td>2017</td><td>Generation of 01st Payment under Hambantota Port Concession Agreement between Sri Lanka Ports Authority and China Merchants Port Holdings Company Ltd</td></tr>
    <tr><td>2017</td><td>Handling of 6 Millionth TEUs (Twenty-foot Equivalent Unit) by the Port of Colombo</td></tr>
    <tr><td>2017</td><td>Recorded the highest ever net profit of Rs. 13.3 Billion</td></tr>
    <tr><td>2018</td><td>Generation of 02nd Payment under Hambantota Port Concession Agreement between Sri Lanka Ports Authority and China Merchants Port Holdings Company Ltd</td></tr>
    <tr><td>2018</td><td>SLPA enters into MOU with SAGT and CICT to collectively promote the Port of Colombo</td></tr>
    <tr><td>2018</td><td>SLPA won Ports Authority of the Year 2018 Award at Global Ports Forum</td></tr>
    <tr><td>2018</td><td>Generation of last tranche under Hambantota Port Concession Agreement between Sri Lanka Ports Authority and China Merchants Port Holdings Company Ltd</td></tr>
    <tr><td>2018</td><td>The Port of Colombo organised the first ever Colombo Port Award Night</td></tr>
    <tr><td>2018</td><td>Port of Colombo Ranked as the World’s Highest Container Growth Port in the first half of 2018 – Alphaliner</td></tr>
    <tr><td>2019</td><td>Handling of 7 Million TEUs by the Port of Colombo</td></tr>
    <tr><td>2019</td><td>Sri Lanka Ports Authority celebrated its 40th anniversary on August 2019</td></tr>
    <tr><td>2020</td><td>Sri Lanka Ports Authority’s East Container Terminal commissioned</td></tr>
    <tr><td>2020</td><td>SLPA won the GPF Awards for 'Port Authority of The Year & Port Infrastructure Development of the Year 2020'</td></tr>
    <tr><td>2020</td><td>A new sports complex for the Sri Lanka Ports Authority</td></tr>
    <tr><td>2020</td><td>Sri Lanka: East Container Terminal Inaugurated for Operations</td></tr>
    <tr><td>2020</td><td>SLPA commenced Phase V of JCT</td></tr>
    <tr><td>2021</td><td>SLPA laid foundation stone for a new Container Freight Station</td></tr>
    <tr><td>2021</td><td>SLPA Female Crane Operators Received Excellence Award</td></tr>
    <tr><td>2021</td><td>Sri Lanka Ports Authority launched 'Theertha' Magazine</td></tr>
    <tr><td>2021</td><td>SLPA Upgraded its Terminal Management System(TMS) to N4</td></tr>
    <tr><td>2021</td><td>Colombo Port is the top-ranked port in South Asia (CPPI)</td></tr>
    <tr><td>2021</td><td>Sri Lanka Ports Authority Celebrated 42nd Anniversary</td></tr>
    <tr><td>2021</td><td>World’s largest container ship in Colombo Port</td></tr>
    <tr><td>2022</td><td>The construction of the second phase of the Eastern Terminal of the Colombo Port commenced</td></tr>
    <tr><td>2022</td><td>SLPA won the Best Port Authority and the Best Public Container Terminal of the Year 2021 Award at Global Ports Forum</td></tr>
    <tr><td>2023</td><td>SLPA won prestigious GPF Awards for Port Authority of the Year and Best Public Container Terminal of the Year 2023</td></tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Slpa;