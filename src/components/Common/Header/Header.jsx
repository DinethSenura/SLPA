import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';
import logo from '../../../assets/images/home/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };
  const closeNav = () => {
    setIsNavOpen(false);
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
              <NavLink to="/" className="nav-link" activeClassName="active"onClick={closeNav}>
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
                <li><NavLink to="/slpa" className="dropdown-item"onClick={closeNav}> SLPA</NavLink></li>
                <li><NavLink to="/visionmission" className="dropdown-item" onClick={closeNav}>  Vision & Mission</NavLink></li>
                <li><NavLink to="/boardofdirectors" className="dropdown-item" onClick={closeNav}> Bord of Directors</NavLink></li>
                <li><NavLink to="/act" className="dropdown-item" onClick={closeNav}> ACT</NavLink></li>
                <li><NavLink to="/procedures" className="dropdown-item"onClick={closeNav}> Procedures</NavLink></li>
                <li><NavLink to="/circulars" className="dropdown-item"onClick={closeNav}> Circulars</NavLink></li>
                <li><NavLink to="/awards" className="dropdown-item"onClick={closeNav}> Awards</NavLink></li>
                <li><NavLink to="/annualreports" className="dropdown-item"onClick={closeNav}> Annual Reports</NavLink></li>
                <li><NavLink to="/tariff" className="dropdown-item"onClick={closeNav}> Tariff</NavLink></li>
                <li><NavLink to="/righttoinformation" className="dropdown-item"onClick={closeNav}> Right To Information</NavLink></li>
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
                <li><NavLink to="/colombo" className="dropdown-item" onClick={closeNav}>Colombo</NavLink></li>
                {/* <NavLink to="/esystem" className="btn btn-warning"> E-SYSTEM</NavLink> */}
                <li><NavLink to="/galle" className="dropdown-item" onClick={closeNav}>Galle</NavLink></li>
                <li><NavLink to="/trincomalee" className="dropdown-item" onClick={closeNav}>Trincomalee</NavLink></li>
                <li><NavLink to="/hip" className="dropdown-item" onClick={closeNav}>HIP</NavLink></li>
                <li><NavLink to="/oluvil" className="dropdown-item" onClick={closeNav}>Oluvil</NavLink></li>
                <li><NavLink to="/kankesanthurai" className="dropdown-item" onClick={closeNav}>Kankesanthurai</NavLink></li>
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
                <li><NavLink to="/projects/project" className="dropdown-item" onClick={closeNav}>Project</NavLink></li>
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
                <li><NavLink to="/procurement/contactsgeneralinfo" className="dropdown-item" onClick={closeNav}>Contacts-General Info</NavLink></li>
                <li><NavLink to="/procurement/foreignpurchases" className="dropdown-item" onClick={closeNav}>Foreign-Purchases</NavLink></li>
                <li><NavLink to="/procurement/localpurchases" className="dropdown-item" onClick={closeNav}>Local Purchases</NavLink></li>
                <li><NavLink to="/procurement/other" className="dropdown-item" onClick={closeNav}>Other</NavLink></li>
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
                <li><NavLink to="/ministry" className="dropdown-item" onClick={closeNav}>Ministry</NavLink></li>
                <li><NavLink to="/chairman&directors" className="dropdown-item" onClick={closeNav}>Chairman & Directors</NavLink></li>
                <li><NavLink to="/managementteam" className="dropdown-item" onClick={closeNav}>Management Team</NavLink></li>
                <li><NavLink to="/mahapolaacademy" className="dropdown-item" onClick={closeNav}>Mahapola Academy</NavLink></li>
                <li><NavLink to="/helpdesk" className="dropdown-item" onClick={closeNav}>Help Desk</NavLink></li>
                <li><NavLink to="/slpaports" className="dropdown-item" onClick={closeNav}>SLPA Ports</NavLink></li>
                <li><NavLink to="/shippingdirectory" className="dropdown-item" onClick={closeNav}>Shipping Directory</NavLink></li>
                <li><NavLink to="/isps" className="dropdown-item" onClick={closeNav}>ISPS</NavLink></li>
                <li><NavLink to="/educationalvisits" className="dropdown-item" onClick={closeNav}>Educational Visits</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* E-SYSTEM Button for Small Screens */}
        <div className="d-lg-none mt-2 ms-3">
          <NavLink to="/esystem" className="btn btn-warning"onClick={closeNav}>
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
