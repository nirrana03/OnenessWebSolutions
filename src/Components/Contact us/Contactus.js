import React, { useState } from "react";
import "./Contactus.css"; 
import phoneIcon from "../Assests/phone-call.png";
import mailIcon from "../Assests/mail.png";
import locationIcon from "../Assests/location.png";

// Form
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    setStatus("(Test Mode) Your message would be sent!");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <section className="form-section">
      <div className="form-container">
        {/* Section Header */}
        <p className="form-small-heading">Contact Us</p>
        <h1 className="form-title">Hi there! Let’s talk.</h1>
        <p className="form-description">
          Leave your contact information through the form, and we will get in
          touch with you as soon as possible!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Name *</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>Please, tell us a bit more about your needs.</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Inquiry</button>
        </form>

        {status && <p className="status">{status}</p>}
      </div>
    </section>
  );
};

// Map Section
const MapSection = () => {
  return (
    <div className="map-section">
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
    </div>
  );
};

// Explore Projects Card (CTA)
const ExploreProjectsCard = () => {
  return (
    <section className="explore-section">
      <div className="explore-card">
        <h2 className="explore-title">Checkout our recent projects</h2>
        <p className="explore-description">
          From mobile apps to web apps, we make business come alive across the
          globe for multiple domains
        </p>
        <button className="explore-button">Explore our projects</button>
      </div>
    </section>
  );
};

// Main ContactUs Component
const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <Form />
      <MapSection />
      <ExploreProjectsCard />
    </div>
  );
};

export default ContactUs;
