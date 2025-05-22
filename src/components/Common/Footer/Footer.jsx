import React, { useState, useEffect } from 'react';
import './footer.css';
import logo from '../../../assets/images/home/logo.png';
import facebook from '../../../assets/images/social-media/facebook.png';
import twitter from '../../../assets/images/social-media/twitter.png';
import linkdin from '../../../assets/images/social-media/linkdin.png';
import instagram from '../../../assets/images/social-media/instagram.png';
import youtube from '../../../assets/images/social-media/youtube.png';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTelegramPlane, FaArrowUp } from 'react-icons/fa'; // Importing arrow icon

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerTop = document.querySelector('.footer').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Show button only when the footer is fully in view
      setShowButton(footerTop <= windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section address-section">
          <img src={logo} alt="" className="logo1" />
          <p><FaMapMarkerAlt /> Level 7, HQ Colombo, No. 464, <br /> T.B. Jaya Mawatha, Colombo 10, SriLanka.</p>
          <p><FaPhoneAlt /> <a href="tel:+94112421231">+94 112 42 12 31 / +94 112 42 12 01</a></p>
          <p><FaEnvelope /> <a href="mailto:info@slpa.lk">info@slpa.lk</a></p>
          <p><FaTelegramPlane /> <a href="https://t.me/PORTSLANKA" target="_blank" rel="noreferrer">Telegrams : PORTS LANKA</a></p>
          <p>Telex: +94-11 21805 PORTS CE</p>
        </div>
        <div className="footer-section media-section">
          <h4>MEDIA</h4>
          <ul>
            <li className="media-downloads"><a href="#link-1">Downloads</a></li>
            <li className="media-news"><a href="#link-1">News</a></li>
            <li className="media-advertisement"><a href="#link-1">Advertisement</a></li>
            <li className="media-gallery"><a href="#link-1">Gallery</a></li>
          </ul>
          <div className="social-icons">
            <a href="https://www.slpa.lk/port-colombo/slpa" target="_blank" rel="noreferrer">
              <img src={facebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com/slpauthority" target="_blank" rel="noreferrer">
              <img src={twitter} alt="Twitter" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/company/srilankaportsauthority" target="_blank" rel="noreferrer">
              <img src={linkdin} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/srilankaportsauthority/" target="_blank" rel="noreferrer">
              <img src={instagram} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCaSwlDCurdJ-rx-m2-ATwqw/videos" target="_blank" rel="noreferrer">
              <img src={youtube} alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section quick-links">
          <h4>QUICK LINKS</h4>
          <div className="quick-links-wrapper">
  <ul>
    <li><a href="http://mpma.slpa.lk/" target="_blank" rel="noopener noreferrer">Mahapola Academy</a></li>
    <li><a href="https://news.slpa.lk/" target="_blank" rel="noopener noreferrer">NEWS.SLPA.LK</a></li>
    <li><a href="http://portcom.slpa.lk/slparsoa/" target="_blank" rel="noopener noreferrer">SLPARSOA</a></li>
    <li><a href="/site-index">Site Index</a></li>
    <li><a href="/zero-tolerance-notice">Zero Tolerance Notice</a></li>
  </ul>
  <ul>
    <li><a href="/faq">FAQ</a></li>
    <li><a href="/traffic">Tariff</a></li>
    <li><a href="/opportunistic">Opportunities</a></li>
    <li><a href="/rti">RTI</a></li>
    <li><a href="/csr">CSR</a></li>
  </ul>
</div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>Copyright © Ports Authority 2023. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <p>Created by: Ports Authority IS Division</p>
        </div>
      </div>

      {/* Scroll-to-Top Button */}
      {showButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </footer>
  );
};

export default Footer;
