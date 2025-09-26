import React from "react";
import "./Dashboard.css";
import logo1 from "../Assests/project-plan.png";
import logo2 from "../Assests/clients.png";
import logo3 from "../Assests/award.png";
import logo4 from "../Assests/team.png";
import blog from "../Assests/blog.jpg";
import hero from "../Assests/hero.jpg"

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Hero */}
      <section className="hero">
        <div className="hero-text">
          <h1>Bringing Your Ideas to Reality with Digital Solutions</h1>
          <p>
            You have the idea to disrupy an industry and we believe in
            empowering our clients with an ambitious mission.
          </p>
          <button className="btn">Let's Get Started</button>

          <div className="info-container">
            <div className="info-row">
              <div className="info-column">
                <h3>6+</h3>
                <p>Years in Industry</p>
              </div>
              <div className="info-column">
                <h3>50+</h3>
                <p>Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Hero" />
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h3>Services</h3>
        <h1>
          Reimagine digital products, from concept to launchwith our expertise
        </h1>
        <p>
          We are small team with a big heart and believe we can bring your idea
          to life through saclable and sustainable design solutions. It doesn't
          matter to us if you;re a one man brand or one from a band of hundred,
          our process will remain the same. We care that you want to do
          something interesting.
        </p>
        <div className="service-grid">
          <div className="service-card">
            <h3>Research</h3>
            <p>Heuristic Analysis</p>
            <p>Design Audit</p>
            <p>Competitive Analysis</p>
            <p>UX research</p>
            <p>Usability Testing</p>
          </div>
          <div className="service-card">
            <h3>Design</h3>
            <p>User Experience Design</p>
            <p>User Interface Design</p>
            <p>Digital Prototyping</p>
            <p>System Design</p>
            <p>Interaction Design</p>
          </div>
          <div className="service-card">
            <h3>Development</h3>
            <p>Front-end Development</p>
            <p>Mobile Application</p>
            <p>Web Application</p>
            <p>Custome Applications</p>
            <p>No-code Applications</p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="achievements">
        <h1>Our Achievements</h1>
        <h3>
          From early stage startups to renowned brands, we have plenaty of
          stories to share
        </h3>
        <div class="achievements-container">
          <div class="achievement-card">
            <div class="info-container">
              <img src={logo1} alt="completed projects" />
              <p>Projects Completed</p>
              <span class="counter" data-target="150">
                100+
              </span>
            </div>
          </div>

          <div class="achievement-card">
            <div class="info-container">
              <img src={logo2} alt="satisfied-clients" />
              <p>Satisfied Clients</p>
              <span class="counter" data-target="120">
                60+
              </span>
            </div>
          </div>

          <div class="achievement-card">
            <div class="info-container">
              <img src={logo3} alt="Awards" />
              <p>Awards Won</p>
              <span class="counter" data-target="10">
                10+
              </span>
            </div>
          </div>

          <div class="achievement-card">
            <div class="info-container">
              <img src={logo4} alt="Members" />
              <p>Team Members</p>
              <span class="counter" data-target="10">
                12+
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects">
        <div className="project-card">
          <h1>Checkout our recent projects</h1>
          <h3>
            From mobile apps to web apps, we make business come alive across the
            globe for multiple domains
          </h3>
          <button className="btn">Explore our projects</button>
        </div>
      </section>

      <section className="blog">
        <div className="blog-card">
          <div className="blog-image">
            <img src={blog} alt="Blog Thumbnail" />
          </div>
          <div className="blog-content">
            <span className="blog-tag">Blog</span>
            <h2>
              Comparing the Performance of a Mobile App built in Native platform
              and cross-platform
            </h2>
            <p className="blog-author">
              By Bhaumik Prajapati on 24 April, 2023
            </p>
            <a href="#" className="blog-link">
              View all blogs
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h3>Have an idea?</h3>
        <h1>Let's build together and make it reality.</h1>
        <button className="btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default Dashboard;
