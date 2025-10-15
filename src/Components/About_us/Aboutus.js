import React, { useEffect, useRef } from "react";
import "./Aboutus.css";
import process from "../Assests/AboutUs_Process.jpeg";
import expertTalk from "../Assests/expert_talk.jpeg";

// Custom Scroll Animation Hook
function useScrollAnimation() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target); // Animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return refs;
}

// Hero Section
function HeroSection({ addRef }) {
  return (
    <section ref={(el) => (addRef.current[0] = el)} className="about-hero-section fade-up">
      <div className="hero-container">
        <p className="hero-subtitle">Our Process</p>
        <h1 className="hero-title">Seamless process to empower your business</h1>
        <p className="hero-description">
          With our tailored process, we aim to deliver a product that not only
          meets your current needs but also sets the stage for your future
          growth.
        </p>
        <div className="hero-image-wrapper">
          <img src={process} alt="Our process" className="hero-image" />
        </div>
      </div>
    </section>
  );
}

// Steps Section
function StepsSection({ addRef }) {
  return (
    <section ref={(el) => (addRef.current[1] = el)} className="steps-section fade-left">
      <div className="steps-container">
        <h2 className="steps-title">For Startups and Enterprises</h2>
        <h1 className="steps-subtitle">Build. Iterate. Launch.</h1>

        <div className="step">
          <h3 className="step-number">Step-1</h3>
          <h2 className="step-heading">Understand idea and find target users.</h2>
          <p className="step-text">
            We start by conducting thorough discussions to understand your
            business goals, target audience, and project requirements. This
            helps us gain valuable insights into your vision, enabling us to
            align our strategies with your objectives.
          </p>
        </div>

        <div className="step">
          <h3 className="step-number">Step-2</h3>
          <h2 className="step-heading">Design and iterate.</h2>
          <p className="step-text">
            We focus on creating an exceptional user experience through
            intuitive and user-centric designs. Incorporating early feedback
            throughout the iteration process allows us to reach market ready
            product to launch.
          </p>
        </div>

        <div className="step">
          <h3 className="step-number">Step-3</h3>
          <h2 className="step-heading">Launch.</h2>
          <p className="step-text">
            After rigorous usability testing and client approval, we deploy your
            solution to the live environment.
          </p>
        </div>

        <div className="cta-box">
          <p>
            By following this Agile and robust design and development process,
            we ensure a collaborative and efficient journey towards bringing
            your vision to reality.
          </p>
          <button className="cta-btn">Get in touch</button>
        </div>
      </div>
    </section>
  );
}

// Values Section
function ValuesSection({ addRef }) {
  return (
    <section ref={(el) => (addRef.current[2] = el)} className="values-section fade-right">
      <div className="values-container">
        <h4 className="values-label">Values</h4>
        <h2 className="values-title">
          We are driven by a set of core values that shape our company culture
        </h2>

        <div className="values-grid">
          <div className="value-card">
            <h3 className="value-heading">Collaboration</h3>
            <p className="value-text">
              We believe in the power of collaboration, where ideas are freely shared and teamwork
              is seamless. By fostering strong communication with our clients and among our teams,
              we create innovative solutions that are practical and impactful to the final
              deliverables.
            </p>
          </div>

          <div className="value-card">
            <h3 className="value-heading">Quality</h3>
            <p className="value-text">
              We have a strong commitment to quality in everything we do. We take pride in
              delivering high-performing solutions that meet the highest standards of excellence.
              Every detail is meticulously crafted, ensuring each project is executed with precision
              and meets the unique requirements of our clients.
            </p>
          </div>

          <div className="value-card">
            <h3 className="value-heading">Growth</h3>
            <p className="value-text">
              We foster continual growth — for our employees, where we encourage upskilling and
              innovation, and for our clients, where we provide scalable and future-proof
              technologies. Our philosophy is to grow together, ensuring that processes evolve as
              new possibilities are created to best serve both our team and clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Expert Talk Section
function ExpertTalk({ addRef }) {
  return (
    <section ref={(el) => (addRef.current[3] = el)} className="expert-section fade-up">
      <div className="expert-container">
        <div className="expert-image">
          <img src={expertTalk} alt="Development Expert" />
        </div>
        <div className="expert-content">
          <h2 className="expert-title">Talk to our development expert</h2>
          <p className="expert-text">
            From mobile apps to web apps, we make business come alive across the
            globe for multiple domains
          </p>
          <button className="expert-btn">Let’s Talk</button>
        </div>
      </div>
    </section>
  );
}

// Main AboutUs Component
export default function AboutUs() {
  const refs = useScrollAnimation();

  return (
    <div className="about-us-page">
      <HeroSection addRef={refs} />
      <StepsSection addRef={refs} />
      <ValuesSection addRef={refs} />
      <ExpertTalk addRef={refs} />
    </div>
  );
}
