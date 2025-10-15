import React, { useEffect, useRef } from "react";
import "./Dashboard.css";
import logo1 from "../Assests/project-plan.png";
import logo2 from "../Assests/clients.png";
import logo3 from "../Assests/award.png";
import logo4 from "../Assests/team.png";
import blogImg from "../Assests/Dashboard_Blog.jpeg";
import heroImg from "../Assests/Dashboard_Hero.jpeg";

const Dashboard = () => {
  const achievementsRef = useRef(null);

  useEffect(() => {
    const counters = achievementsRef.current.querySelectorAll(".dashboard-achievements-counter");
    let hasAnimated = false;

    const animateCounters = () => {
      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const duration = 2000;
        const stepTime = 20;
        const increment = target / (duration / stepTime);
        let count = 0;

        const updateCounter = () => {
          count += increment;
          if (count < target) {
            counter.textContent = Math.ceil(count) + "+";
            setTimeout(updateCounter, stepTime);
          } else {
            counter.textContent = target + "+";
          }
        };
        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateCounters();
          hasAnimated = true;
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(achievementsRef.current);

    const allElements = document.querySelectorAll(
      ".dashboard section:not(.dashboard-hero-section)"
    );

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show");
            scrollObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    allElements.forEach((el) => {
      el.classList.add("scroll-hidden");
      scrollObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <div className="dashboard">
      {/* Hero Section */}
      <section className="dashboard-hero-section">
        <div className="dashboard-hero-text">
          <h1>Bringing Your Ideas to Reality with Digital Solutions</h1>
          <p>
            You have the idea to disrupt an industry and we believe in
            empowering our clients with an ambitious mission.
          </p>
          <button className="btn">Let's Get Started</button>

          <div className="dashboard-hero-info">
            <div className="dashboard-hero-info-row">
              <div className="dashboard-hero-info-col">
                <h3>6+</h3>
                <p>Years in Industry</p>
              </div>
              <div className="dashboard-hero-info-col">
                <h3>50+</h3>
                <p>Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-hero-image">
          <img src={heroImg} alt="Hero" />
        </div>
      </section>

      {/* Services Section */}
      <section className="dashboard-services-section">
        <h3>Services</h3>
        <h1>
          Reimagine digital products, from concept to launch with our expertise
        </h1>
        <p>
          We are a small team with a big heart and believe we can bring your
          idea to life through scalable and sustainable design solutions.
        </p>

        <div className="dashboard-services-grid">
          <div className="dashboard-services-card">
            <h3>Research</h3>
            <p>Heuristic Analysis</p>
            <p>Design Audit</p>
            <p>Competitive Analysis</p>
            <p>UX Research</p>
            <p>Usability Testing</p>
          </div>
          <div className="dashboard-services-card">
            <h3>Design</h3>
            <p>User Experience Design</p>
            <p>User Interface Design</p>
            <p>Digital Prototyping</p>
            <p>System Design</p>
            <p>Interaction Design</p>
          </div>
          <div className="dashboard-services-card">
            <h3>Development</h3>
            <p>Front-end Development</p>
            <p>Mobile Applications</p>
            <p>Web Applications</p>
            <p>Custom Applications</p>
            <p>No-code Applications</p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="dashboard-achievements-section" ref={achievementsRef}>
        <h1>Our Achievements</h1>
        <h3>
          From early-stage startups to renowned brands, we have plenty of
          stories to share.
        </h3>

        <div className="dashboard-achievements-container">
          <div className="dashboard-achievement-card">
            <img src={logo1} alt="completed projects" />
            <p>Projects Completed</p>
            <span className="dashboard-achievements-counter" data-target="150">0+</span>
          </div>

          <div className="dashboard-achievement-card">
            <img src={logo2} alt="satisfied clients" />
            <p>Satisfied Clients</p>
            <span className="dashboard-achievements-counter" data-target="120">0+</span>
          </div>

          <div className="dashboard-achievement-card">
            <img src={logo3} alt="awards" />
            <p>Awards Won</p>
            <span className="dashboard-achievements-counter" data-target="10">0+</span>
          </div>

          <div className="dashboard-achievement-card">
            <img src={logo4} alt="members" />
            <p>Team Members</p>
            <span className="dashboard-achievements-counter" data-target="12">0+</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="dashboard-projects-section">
        <div className="dashboard-project-card">
          <h1>Checkout our recent projects</h1>
          <h3>
            From mobile apps to web apps, we make businesses come alive across
            the globe for multiple domains.
          </h3>
          <button className="btn">Explore our projects</button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="dashboard-blog-section">
        <div className="dashboard-blog-card">
          <div className="dashboard-blog-image">
            <img src={blogImg} alt="Blog Thumbnail" />
          </div>
          <div className="dashboard-blog-content">
            <span className="dashboard-blog-tag">Blog</span>
            <h2>
              Comparing the Performance of a Mobile App built in Native platform
              and cross-platform
            </h2>
            <p className="dashboard-blog-author">By Bhaumik Prajapati on 24 April, 2023</p>
            <a href="#" className="dashboard-blog-link">View all blogs</a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dashboard-cta-section">
        <h3>Have an idea?</h3>
        <h1>Let's build together and make it a reality.</h1>
        <button className="btn">Get in Touch</button>
      </section>
    </div>
  );
};

export default Dashboard;
