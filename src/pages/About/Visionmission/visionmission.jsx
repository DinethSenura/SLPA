import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";

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
            <h2>Vision & Mission</h2>
            <img src="article_image_2016_04_27_1461723025.png" alt="Vision & Mission" style={{ width: "100%", height: "auto" }} />
            
            <h4 style={{ color: "#236F86" }}><strong>Our Vision</strong></h4>
            <p style={{ textAlign: "justify" }}><strong>"To be the premier green maritime and logistics hub in South Asia and ranked among the top 15 busiest container ports in the world."</strong></p>
            
            <h4 style={{ color: "#236F86" }}><strong>Our Mission</strong></h4>
            <p style={{ textAlign: "justify" }}><strong>"To provide competitive port facilities and logistics services, fostering seamless international trade connections while prioritizing innovation, sustainability, customer-centric agility and committed to contribute to Sri Lanka's economic growth and prosperity."</strong></p>
            
            <h4 style={{ color: "#236F86", marginBottom: "24px", marginTop: "30px" }}><strong>Our Corporate Goals</strong></h4>
            <ul>
                <li>Build a Smart Port by improving the capacity of infrastructure and superstructure with modern technology and ICT innovations.</li>
                <li>Uplift the rank of Port of Colombo to be among the top twenty (20) container ports during the next three years.</li>
                <li>Enhance the competency of human capital to improve productivity, quality and performance of SLPA.</li>
                <li>Promote co-operation of all port communities, shipping agencies and government organizations to strengthen and build a positive business relationship.</li>
                <li>Increase the customer base, business volume and the turnover to achieve maximum value at the minimum cost.</li>
                <li>Develop organizational specific governance framework, systems and procedures.</li>
                <li>Achieve a Green and Sustainable Status for Port of Colombo adopting United Nations Sustainable Development Goals (UNSDGs).</li>
            </ul>
            
            {/* Inject API content safely */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default VisionMission;
