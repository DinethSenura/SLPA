import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './header.css';
import logo from '../../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
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
                <li><NavLink to="/about/history" className="dropdown-item">History</NavLink></li>
                <li><NavLink to="/about/team" className="dropdown-item">Team</NavLink></li>
                <li><NavLink to="/about/mission" className="dropdown-item">Mission</NavLink></li>
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
                <li><NavLink to="/ports/terminal1" className="dropdown-item">Terminal 1</NavLink></li>
                <li><NavLink to="/ports/terminal2" className="dropdown-item">Terminal 2</NavLink></li>
                <li><NavLink to="/ports/terminal3" className="dropdown-item">Terminal 3</NavLink></li>
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
                <li><NavLink to="/projects/ongoing" className="dropdown-item">Ongoing</NavLink></li>
                <li><NavLink to="/projects/completed" className="dropdown-item">Completed</NavLink></li>
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
                <li><NavLink to="/procurement/tenders" className="dropdown-item">Tenders</NavLink></li>
                <li><NavLink to="/procurement/bids" className="dropdown-item">Bids</NavLink></li>
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
                <li><NavLink to="/contact/support" className="dropdown-item">Support</NavLink></li>
                <li><NavLink to="/contact/feedback" className="dropdown-item">Feedback</NavLink></li>
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
