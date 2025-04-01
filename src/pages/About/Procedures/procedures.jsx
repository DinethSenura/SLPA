import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import './procedures.css';
import portImage2 from '../../../assets/images/Ports/PortColomboHero.jpg';

const MyComponent = () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        const staticHtml = `
            <style type="text/css">
                table {
                    border-collapse: collapse;
                    width: 100%;
                }

                th, td {
                    color: #6A6969;
                    text-align: left;
                    padding: 20px;
                }

                tr:nth-child(odd) {
                    background-color: #f2f2f2;
                }

                a:visited {
                    color: #6A6969;
                }

                a:hover {
                    color: #ff9800;
                }
            </style>
            <table>
                <tbody>
                    <tr>
                        <th><span style="color:#444444;"><span style="font-family:arial,helvetica,sans-serif;"><strong>NO.</strong></span></span></th>
                        <th><span style="color:#444444;"><span style="font-family:arial,helvetica,sans-serif;"><strong>PROCEDURE</strong></span></span></th>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>1</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_15639478511563947922.pdf" target="_blank">CLAIM PROCUDURE FOR SHORTAGE OF CARGO-WIC1</a></strong></span></span></td>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>2</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_15639479271563948374.pdf" target="_blank">CLAIM PROCUDURE FOR DAMAGED CARGO - WIC 2</a></strong></span></span></td>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>3</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_15639483771563948432.pdf" target="_blank">EXPORT CONTAINER REMOVAL OUT PROCEDURE</a></strong></span></span></td>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>4</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_15639484351563948503.pdf" target="_blank">FORMAT FOR AMENDMENTS IN STUFFING DETAILS</a></strong></span></span></td>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>5</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_1563948741.pdf" target="_blank">RENT WAIVER PROCEDURE</a></strong></span></span></td>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>6</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_15639485531563948814.pdf" target="_blank">SALES PROCEDURE OF FCL CARGO (NON PERISHABLE)</a></strong></span></span></td>
                    </tr>
                    <tr>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong>7</strong></span></span></td>
                        <td><span style="font-family:arial,helvetica,sans-serif;"><span style="font-size:14px;"><strong><a href="https://www.slpa.lk/uploads/article_attachment/attachment_2019_07_24_15639488251563948878.pdf" target="_blank">SALES PROCEDURE OF LCL CARGO (NON PERISHABLE)</a></strong></span></span></td>
                    </tr>
                </tbody>
            </table>
        `;
        setHtmlContent(DOMPurify.sanitize(staticHtml));
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
            <div className="act-wrapper">
            <div className="procedures-small-boxes-container">
                {[
                    { title: "SLPA", path: "/Slpa" },
                    { title: "Vision and Mission", path: "/Visionmission" },
                    { title: "Board of Directors", path: "/Boardofdirectors" },
                    { title: "ACT", path: "/Act" },
                    { title: "Procedures", path: "/Procedures" },
                    { title: "Circular", path: "/Circlular" },
                    { title: "Awards", path: "Awards" },
                    { title: "Annual Reports", path: "Annualreport" },
                    { title: "Tariff", path: "Tariff" },
                    { title: "Right to Information", path: "Righttoinformation" }
                ].map((box, i) => (
                    <Link to={box.path} key={i} className="procedures-small-box-link">
                        <div className="procedures-small-box">
                            {box.title}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Inject API content safely */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </div>
        </div>
    );
};

export default MyComponent;