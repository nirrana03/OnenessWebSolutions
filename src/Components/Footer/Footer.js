import React from "react";
import "./Footer.css";
import logo from "../Assests/main-logo.png";
import instagram from "../Assests/instagram.png";
import linkdin from "../Assests/linkedin.png";
import facebook from "../Assests/facebook.png";
import twitter from "../Assests/twitter.png";
import dribble from "../Assests/dribble.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo + Copyright */}
        <div className="footer-section footer-logo-section">
          <img src={logo} alt="OnenessWeb Logo" className="footer-logo" />
          <p className="footer-copy">© Copyright 2023 Onenessweb</p>
        </div>

        {/* Useful Links */}
        <div className="footer-section footer-links">
          <h3 className="footer-title">Useful Links</h3>
          <ul className="footer-list">
            <li className="footer-list-item"><a className="footer-link" href="/portfolio">Work</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/about">About us</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/services">Services</a></li>
            <li className="footer-list-item"><a className="footer-link" href="blog">Blogs</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section footer-services">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list">
            <li className="footer-list-item"><a className="footer-link" href="/webdev">Web Development</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/appdev">App Development</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/digi-marketing">Digital Marketing</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/e-commerce">E-Commerce</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/uiux">Ui/Ux Design</a></li>
            <li className="footer-list-item"><a className="footer-link" href="/quality-analyst">Quality Analyst</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-contact-line">📞 +91-92653311517</p>
          <p className="footer-contact-line">📧 sales@onenesswebsolution.com</p>
          <p className="footer-contact-line">📍 Ahmedabad, India</p>

          <div className="footer-socials">
            <a className="footer-social-link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" className="footer-social-icon" />
            </a>
            <a className="footer-social-link" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkdin} alt="LinkedIn" className="footer-social-icon" />
            </a>
            <a className="footer-social-link" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook" className="footer-social-icon" />
            </a>
            <a className="footer-social-link" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter" className="footer-social-icon" />
            </a>
            <a className="footer-social-link" href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img src={dribble} alt="Dribbble" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
