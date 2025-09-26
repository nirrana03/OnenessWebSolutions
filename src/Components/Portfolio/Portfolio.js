import React from "react";
import "./Portfolio.css";
import pro1 from "../Assests/project1.png"
import pro2 from "../Assests/project2.png"
import pro3 from "../Assests/project3.png"

const OurWork = () => {
  return (
    <section className="portfolio-section">
      <div className="ourwork-header">
        <h4>Our Work</h4>
        <h1>What have we done?</h1>
        <p>
          OnenessWeb helps companies go forward on the digitalisation journey.
          We deliver meaningful applications and services with agile teams of
          passionate developers and designers.
        </p>
      </div>

      <h1>Work</h1>

      {/* Card 1 - Karla Design */}
      <div className="ourwork-card">
        <div className="ourwork-image">
          <img
            src={pro1}
            alt="WiseWallet LLC"
          />
        </div>
        <div className="ourwork-content">
          <h3>
            Karla Design – Human-Centered Architecture
          </h3>
          <p>Karla Design, based in Switzerland, creates innovative architectural and interior spaces that prioritize human well-being. Their projects blend vibrant design, creativity, and holistic concepts to deliver life-changing spatial experiences worldwide.</p>

          <div className="ourwork-tags">
            <span className="tag">Web</span>
            <span className="tag">B2C</span>
            <span className="tag">Fintech</span>
          </div>

          <a href="https://karladesign.ch/" className="read-more">
            Read more
          </a>
        </div>
      </div>

      {/* Card 2 - Mayweather Boxing + Fitness */}
      <div className="ourwork-card">
        <div className="ourwork-image">
          <img
            src={pro2}
            alt="WiseWallet LLC"
          />
        </div>
        <div className="ourwork-content">
          <h3>
            Mayweather Boxing + Fitness
          </h3>
          <p>Mayweather Boxing + Fitness offers high-energy group workouts designed by Floyd Mayweather, combining boxing techniques with strength and cardio training. The program builds fitness, confidence, and community, welcoming everyone from beginners to athletes.</p>

          <div className="ourwork-tags">
            <span className="tag">Web</span>
            <span className="tag">B2C</span>
            <span className="tag">Fintech</span>
          </div>

          <a href="https://mayweather.fit/" className="read-more">
            Read more
          </a>
        </div>
      </div>

      {/* Card 3 - XPT Life – Extreme Performance Training */}
      <div className="ourwork-card">
        <div className="ourwork-image">
          <img
            src={pro3}
            alt="WiseWallet LLC"
          />
        </div>
        <div className="ourwork-content">
          <h3>
            XPT Life – Extreme Performance Training
          </h3>
          <p>XPT Life is a holistic performance lifestyle system founded by Laird Hamilton & Gabby Reece, built around three core pillars: Breathe, Move, Recover.
 It offers an app, immersive experiences, certifications, and a community approach to cultivate resilience, health, and adaptability.</p>

          <div className="ourwork-tags">
            <span className="tag">Web</span>
            <span className="tag">B2C</span>
            <span className="tag">Fintech</span>
          </div>

          <a href="https://xptlife.com/" className="read-more">
            Read more
          </a>
        </div>
      </div>

      {/* CTA */}
      <section className="cta">
        <h3>Have an idea?</h3>
        <h1>Let's build together and make it reality.</h1>
        <button className="btn">Get in Touch</button>
      </section>
 

    </section>
  );
};

export default OurWork;
