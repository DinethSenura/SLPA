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
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" activeClassName="active">
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/ports" className="nav-link" activeClassName="active">
                PORTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projects" className="nav-link" activeClassName="active">
                PROJECTS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/procurement" className="nav-link" activeClassName="active">
                PROCUREMENT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">
                CONTACT
              </NavLink>
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
