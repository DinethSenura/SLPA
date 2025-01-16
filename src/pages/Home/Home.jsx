import React from 'react';
import Banner from '../../components/Banner/Banner';
import Hero from '../../components/Hero/Hero';
import Jctect from '../../components/Jctect/Jctect';
import Services from '../../components/Services/Services';
import Client from '../../components/Client/Client';
import Intro from '../../components/Intro/Intro';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from 'react-icons/fa';
import News from '../../components/News/News';
import imageAboveButton from '../../assets/images/clients/banner.jpg'; // Replace with your image path
import '../Home/home.css';

// Social Media Box Component
const SocialMediaBox = () => {
  return (
    <div className="social-media-box"
      style={{
        position: 'fixed',
        right: '10px',
        top: '45%',
        transform: 'translateY(-50%)',
        backgroundColor: '#221F45',
        padding: '10px',
        borderRadius: '20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        zIndex: 1000,
      }}
    >
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}
      >
        <FaFacebook size={30} color="#1877F2" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}
      >
        <FaTwitter size={30} color="#1DA1F2" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}
      >
        <FaLinkedin size={30} color="#0077B5" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', marginBottom: '10px', textAlign: 'center' }}
      >
        <FaInstagram size={30} color="#E1306C" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block', textAlign: 'center' }}
      >
        <FaYoutube size={30} color="#FF0000" />
      </a>
    </div>
  );
};

const Home = () => {
  return (
    <>
      {/* Floating Social Media Box */}
      <SocialMediaBox />

      {/* Render the Banner component */}
      <Banner />

      {/* Render the Hero component */}
      <Hero />

      {/* Add spacing above Jctect */}
      <div style={{ marginTop: '5px' }}>
        <Jctect />
        <Intro />
      </div>

      {/* Uncomment Intro if needed in the future */}
      {/* <Intro /> */}

      {/* Render the Services component */}
      <Services />

      {/* Main Content */}
  <div className="e-system-container">
    {/* Left Section */}
    <div className="e-system-left-section">
      <h1>Explore Our E-System</h1>
      <button className="e-system-explore-button">E-SYSTEM</button>
    </div>

    {/* Right Section */}
    <div className="e-system-berthing-section">
      <table className="e-system-berthing-table">
        <thead>
          <tr>
            <th>Vessel</th>
            <th>ETA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MSC DHANTIA F</td>
            <td>EX: 1MN</td>
          </tr>
          <tr>
            <td>GANTA BHUM</td>
            <td>0200 5/12</td>
          </tr>
          <tr>
            <td>ARTENOS</td>
            <td>1400 5/12</td>
          </tr>
          <tr>
            <td>NAVIOS UNITE</td>
            <td>1400 6/12</td>
          </tr>
          <tr>
            <td>MSC SHRISTI</td>
            <td>1000 5/12</td>
          </tr>
          <tr>
            <td>MSC SKY II</td>
            <td>1800 11/12</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

      <News />

      {/* Add an image above the button */}
      <div>
        <div style={{ textAlign: 'center' }}>
        <img
  src={imageAboveButton}
  alt="Example"
  style={{
    width: '100%', // Adjust to parent container width
    maxWidth: '100vw', // Ensure it doesn't exceed the viewport width
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Eliminate extra whitespace
  }}
/>

          <button
            className="responsive-button"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#000';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#221F45';
              e.target.style.transform = 'scale(1)';
            }}
          >
            GUIDED PORT TOURS FOR EDUCATIONAL ESTABLISHMENTS
          </button>
        </div>
      </div>

      {/* Render the Client component */}
      <Client />
    </>
  );
};

export default Home;
