import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container" ref={navRef}>
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div
          className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" activeClassName="active">
                HOME
              </NavLink>
            </li>

            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/about"
                className="nav-link dropdown-toggle"
                id="aboutDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >

                ABOUT
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><NavLink to="/about/slpa" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>SLPA</NavLink></li>
                <li><NavLink to="/about/vision&mission" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span> Vision & Mission</NavLink></li>
                <li><NavLink to="/about/bordofdirectors" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Bord of Directors</NavLink></li>
                <li><NavLink to="/about/act" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>ACT</NavLink></li>
                <li><NavLink to="/about/procedures" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Procedures</NavLink></li>
                <li><NavLink to="/about/circulars" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Circulars</NavLink></li>
                <li><NavLink to="/about/awards" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Awards</NavLink></li>
                <li><NavLink to="/about/annualreports" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Annual Reports</NavLink></li>
                <li><NavLink to="/about/tariff" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Tariff</NavLink></li>
                <li><NavLink to="/about/righttoinformation" className="dropdown-item"> <span className="dropdown-icon me-2"> &gt; </span>Right To Information</NavLink></li>
              </ul>
            </li>

            {/* Ports Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/ports"
                className="nav-link dropdown-toggle"
                id="portsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PORTS
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="portsDropdown">
                <li><NavLink to="/colombo" className="dropdown-item">Colombo</NavLink></li>
                {/* <NavLink to="/esystem" className="btn btn-warning"> E-SYSTEM</NavLink> */}
                <li><NavLink to="/Ports/galle" className="dropdown-item">Galle</NavLink></li>
                <li><NavLink to="/ports/trincomalee" className="dropdown-item">Trincomalee</NavLink></li>
                <li><NavLink to="/ports/hip" className="dropdown-item">HIP</NavLink></li>
                <li><NavLink to="/ports/oluvil" className="dropdown-item">Oluvil</NavLink></li>
                <li><NavLink to="/ports/kankesanthurai" className="dropdown-item">Kankesanthurai</NavLink></li>
              </ul>
            </li>

            {/* Projects Dropdown */}
            <li className="nav-item dropdown">
              <NavLink
                to="/projects"
                className="nav-link dropdown-toggle"
                id="projectsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROJECTS
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="projectsDropdown">
                <li><NavLink to="/projects/project" className="dropdown-item">Project</NavLink></li>
              </ul>
            </li>

            {/* Procurement */}
            <li className="nav-item dropdown">
              <NavLink
                to="/procurement"
                className="nav-link dropdown-toggle"
                id="procurementDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROCUREMENT
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="procurementDropdown">
                <li><NavLink to="/procurement/contactsgeneralinfo" className="dropdown-item">Contacts-General Info</NavLink></li>
                <li><NavLink to="/procurement/foreignpurchases" className="dropdown-item">Foreign-Purchases</NavLink></li>
                <li><NavLink to="/procurement/localpurchases" className="dropdown-item">Local Purchases</NavLink></li>
                <li><NavLink to="/procurement/other" className="dropdown-item">Other</NavLink></li>
              </ul>
            </li>

            {/* Contact */}
            <li className="nav-item dropdown">
              <NavLink
                to="/contact"
                className="nav-link dropdown-toggle"
                id="contactDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CONTACT
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="contactDropdown">
                <li><NavLink to="/contact/ministry" className="dropdown-item">Ministry</NavLink></li>
                <li><NavLink to="/contact/chairman&directors" className="dropdown-item">Chairman & Directors</NavLink></li>
                <li><NavLink to="/contact/managementteam" className="dropdown-item">Management Team</NavLink></li>
                <li><NavLink to="/contact/mahapolaacademy" className="dropdown-item">Mahapola Academy</NavLink></li>
                <li><NavLink to="/contact/helpdesk" className="dropdown-item">Help Desk</NavLink></li>
                <li><NavLink to="/contact/slpaports" className="dropdown-item">SLPA Ports</NavLink></li>
                <li><NavLink to="/contact/shippingdirectory" className="dropdown-item">Shipping Directory</NavLink></li>
                <li><NavLink to="/contact/isps" className="dropdown-item">ISPS</NavLink></li>
                <li><NavLink to="/contact/educationalvisits" className="dropdown-item">Educational Visits</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* E-SYSTEM Button for Small Screens */}
        <div className="d-lg-none mt-2 ms-3">
          <NavLink to="/esystem" className="btn btn-warning">
            E-SYSTEM
          </NavLink>
        </div>

        {/* Desktop E-SYSTEM Button */}
        <div className="d-none d-lg-block ms-3">
          <NavLink to="/esystem" className="btn btn-warning">
            E-SYSTEM
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
