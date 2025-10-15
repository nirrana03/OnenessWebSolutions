import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoMain from "../Assests/main-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={logoMain} alt="Main logo" className="navbar-logo-img" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`navbar-hamburger ${menuOpen ? "navbar-hamburger-active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}>
        <li className="navbar-item">
          <Link to="/" onClick={toggleMenu} className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about" onClick={toggleMenu} className="navbar-link">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/services" onClick={toggleMenu} className="navbar-link">Services</Link>
        </li>
        <li className="navbar-item">
          <Link to="/portfolio" onClick={toggleMenu} className="navbar-link">Our Work</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog" onClick={toggleMenu} className="navbar-link">Blog</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" onClick={toggleMenu} className="navbar-link">Contact Us</Link>
        </li>
        <li className="navbar-item navbar-mobile-btn">
          <Link to="/contact" onClick={toggleMenu} className="navbar-btn">Let's Talk</Link>
        </li>
      </ul>

      {/* Desktop Button */}
      <button className="navbar-btn navbar-desktop-btn">Let's Talk</button>
    </nav>
  );
};

export default Navbar;
