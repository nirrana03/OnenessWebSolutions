import React from "react";
import "./Footer.css";
import logo from "../Assests/main-logo.png"
import instagram from "../Assests/instagram.png"
import linkdin from "../Assests/linkedin.png"
import facebook from "../Assests/facebook.png"
import twitter from "../Assests/twitter.png"
import dribble from "../Assests/dribble.png"


const Footer = () => {
  return (
   <footer className="footer">
  <div className="footer-container">
    {/* Logo + Copyright */}
    <div className="footer-section logo-section">
      <img src={logo} alt="OnenessWeb Logo" className="footer-logo" />
      <p>© Copyright 2023 Onenessweb</p>
    </div>

    {/* Useful Links */}
    <div className="footer-section">
      <h3>Useful Links</h3>
      <ul>
        <li><a href="/portfolio">Work</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="blog">Blogs</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>

    {/* Services */}
    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li><a href="/webdev">Web Development</a></li>
        <li><a href="/appdev">App Development</a></li>
        <li><a href="/digi-marketing">Digital Marketing</a></li>
        <li><a href="/e-commerce">E-Commerce</a></li>
        <li><a href="/uiux">Ui/Ux Design</a></li>
        <li><a href="/quality-analyst">Quality Analyst</a></li>
      
      </ul>
    </div>

    {/* Contact */}
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>📞 +91-92653311517</p>
      <p>📧 sales@onenesswebsolution.com</p>
      <p>📍 Ahmedabad, India</p>

    <div className="social-icons">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={instagram} alt="Instagram" className="social-icon" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src={linkdin} alt="LinkedIn" className="social-icon" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <img src={facebook} alt="Facebook" className="social-icon" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <img src={twitter} alt="Twitter" className="social-icon" />
    </a>
    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
      <img src={dribble} alt="Dribbble" className="social-icon" />
    </a>
  </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
