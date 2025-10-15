import React, { useEffect, useRef, useState } from "react";
import "./Contactus.css";
import phoneIcon from "../Assests/phone-call.png";
import mailIcon from "../Assests/mail.png";
import locationIcon from "../Assests/location.png";

const ContactUs = () => {
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const exploreRef = useRef(null);

  useEffect(() => {
    const sections = [formRef.current, mapRef.current, exploreRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-us-page">
      {/* FORM SECTION */}
      <section className="form-section fade-section" ref={formRef}>
        <div className="form-container">
          <p className="form-small-heading">Contact Us</p>
          <h1 className="form-title">Hi there! Let’s talk.</h1>
          <p className="form-description">
            Leave your contact information through the form, and we will get in
            touch with you as soon as possible!
          </p>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone *</label>
                <input type="tel" required />
              </div>
              <div className="form-group">
                <label>Company Name *</label>
                <input type="text" required />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Please, tell us a bit more about your needs.</label>
              <textarea required></textarea>
            </div>

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="map-section fade-section" ref={mapRef}>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <img src={phoneIcon} alt="Phone Icon" className="icon" />
            +91-92653311517
          </p>
          <p>
            <img src={mailIcon} alt="Email Icon" className="icon" />
            sales@onenesswebsolution.com
          </p>
          <p>
            <img src={locationIcon} alt="Location Icon" className="icon" />
            Ahmedabad, India
          </p>
        </div>

        <div className="map-container">
          <iframe
            title="Oneness Websolution Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.073627167505!2d72.93464671548405!3d20.586482486224422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0eaeb4a25a9d7%3A0xd8f7f08b6ab0a2b0!2sOneness%20Web%20Solution!5e0!3m2!1sen!2sin!4v1695973732107!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className="explore-section fade-section" ref={exploreRef}>
        <div className="explore-card">
          <h2 className="explore-title">Checkout our recent projects</h2>
          <p className="explore-description">
            From mobile apps to web apps, we make business come alive across the
            globe for multiple domains
          </p>
          <button className="explore-button">Explore our projects</button>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
