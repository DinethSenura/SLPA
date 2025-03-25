import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Link } from 'react-router-dom'; // Add this line
import './visionmission.css'; // Import CSS import
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg'; // Replace with the actual path

const VisionMission = () => {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        fetch("https://www.slpa.lk/WEBAPI/V1/Articles/get_article_info") // Replace with your API URL
            .then((response) => response.json())
            .then((data) => setHtmlContent(DOMPurify.sanitize(data.html)))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>

<div className="header-section">
        <h1>VISION & MISSION</h1>
        <p className="path">
          <span></span>HOME
          <span>&gt;</span>ABOUT
          <span>&gt;</span>VISION & MISSION
        </p>
        <img src={portImage2} alt="Colombo Port Overview" className="header-image" />
      </div>

      {/* Small Boxes Section */}
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

          <div classname='vision-mission-con'>
            <h2 className="vision-mission-h2">Vision & Mission</h2>
            {/*<img src="article_image_2016_04_27_1461723025.png" alt="Vision & Mission" style={{ width: "100%", height: "auto" }} />*/}
            
            <h4 className="vision-mission-h4" style={{ color: "#236F86" }}><strong>Our Vision</strong></h4>
            <p className="vision-mission-p" style={{ textAlign: "justify" }}><strong>"To be the premier green maritime and logistics hub in South Asia and ranked among the top 15 busiest container ports in the world."</strong></p>
            
            <h4 className="vision-mission-h4" style={{ color: "#236F86" }}><strong>Our Mission</strong></h4>
            <p className="vision-mission-p" style={{ textAlign: "justify" }}><strong>"To provide competitive port facilities and logistics services, fostering seamless international trade connections while prioritizing innovation, sustainability, customer-centric agility and committed to contribute to Sri Lanka's economic growth and prosperity."</strong></p>
            
            <h4 className="vision-mission-h4" style={{ color: "#236F86", marginBottom: "24px", marginTop: "30px" }}><strong>Our Corporate Goals</strong></h4>
            <ul className="vision-mission-ul">
                <li>Build a Smart Port by improving the capacity of infrastructure and superstructure with modern technology and ICT innovations.</li>
                <li>Uplift the rank of Port of Colombo to be among the top twenty (20) container ports during the next three years.</li>
                <li>Enhance the competency of human capital to improve productivity, quality and performance of SLPA.</li>
                <li>Promote co-operation of all port communities, shipping agencies and government organizations to strengthen and build a positive business relationship.</li>
                <li>Increase the customer base, business volume and the turnover to achieve maximum value at the minimum cost.</li>
                <li>Develop organizational specific governance framework, systems and procedures.</li>
                <li>Achieve a Green and Sustainable Status for Port of Colombo adopting United Nations Sustainable Development Goals (UNSDGs).</li>
            </ul>

            </div>
            
            {/* Inject API content safely */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default VisionMission;
