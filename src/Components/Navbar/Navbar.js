import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logom from "../Assests/main-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logom} alt="Main-logo" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
        <li><Link to="/portfolio" onClick={toggleMenu}>Our Work</Link></li>
        <li><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        <li className="mobile-btn"><Link to="/contact" onClick={toggleMenu}>Let's Talk</Link></li>
      </ul>

      {/* Desktop Button */}
      <button className="btn desktop-btn">Let's Talk</button>
    </nav>
  );
};

export default Navbar;
