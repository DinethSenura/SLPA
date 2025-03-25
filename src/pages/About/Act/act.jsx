import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import './act.css'; // Import CSS import
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';

const ActOfSLPA = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const apiData = {
            title: "ACT of SLPA",
            sub_title: "",
            image: "article_image_2019_06_04_1559624237.jpg",
            content: `<h2 style={{ color: '#236F86' }} className='act-title'> <strong> ACT of SLPA </strong> </h2> <p style="text-align: justify;"><strong>AN ACT</strong>&nbsp;to provide for the establishment of the Sri Lanka Ports Authority to develop, maintain, operate and provide port and other services in the ports of Colombo, Galle and Trincomalee and any other port as may be declared hereafter by the minister by order, to be a port to which this Act shall apply; for the exercise, performance and discharge by that authority of the powers, duties and functions of the Port Commissioner, the Port (Cargo) Corporation, and the Port Tally and Protective Services Corporation and such other powers, duties and functions as may be conferred, assigned or imposed on that authority by law; for matters in relation to the officers and servants, property, rights, obligations and liabilities of the Port (Cargo) Corporation and the Port Tally and Protective Services Corporation and the public officers of, the property held by, and the rights. obligations and liabilities of, the department of the Port Commissioner; for the repeal of the Port of Colombo (Administration) act, the Port (Cargo) Corporation Act and the port tally and protective services corporation act; for the modification of certain laws in their application to the ports of Colombo, Galle and Trincomalee and any other port as may be declared hereafter by the Minister by order, to be a port to which this act shall apply; and for connected matters.</p>

<p>[Date of Commencement:&nbsp;1st&nbsp;August, 1979]</p>`
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

            {/* Inject API content safely */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default ActOfSLPA;