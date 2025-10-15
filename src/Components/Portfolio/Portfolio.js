import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import pro1 from "../Assests/project1.png";
import pro2 from "../Assests/project2.png";
import pro3 from "../Assests/project3.png";

const Portfolio = () => {
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("portfolio-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    if (ctaRef.current) observer.observe(ctaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="portfolio-section">
      {/* Header */}
      <div className="portfolio-header">
        <h4 className="portfolio-header-subtitle">Our Work</h4>
        <h1 className="portfolio-header-title">What have we done?</h1>
        <p className="portfolio-header-description">
          OnenessWeb helps companies go forward on the digitalisation journey.
          We deliver meaningful applications and services with agile teams of
          passionate developers and designers.
        </p>
      </div>

      <h1 className="portfolio-heading">Work</h1>

      {/* Card 1 */}
      <div
        className="portfolio-card portfolio-hidden"
        ref={(el) => (cardsRef.current[0] = el)}
      >
        <div className="portfolio-card-image">
          <img src={pro1} alt="Karla Design" />
        </div>
        <div className="portfolio-card-content">
          <h3 className="portfolio-card-title">
            Karla Design – Human-Centered Architecture
          </h3>
          <p className="portfolio-card-text">
            Karla Design, based in Switzerland, creates innovative architectural
            and interior spaces that prioritize human well-being. Their projects
            blend vibrant design, creativity, and holistic concepts to deliver
            life-changing spatial experiences worldwide.
          </p>
          <div className="portfolio-card-tags">
            <span className="portfolio-tag">Web</span>
            <span className="portfolio-tag">B2C</span>
            <span className="portfolio-tag">Fintech</span>
          </div>
          <a href="https://karladesign.ch/" className="portfolio-readmore">
            Read more
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="portfolio-card portfolio-hidden"
        ref={(el) => (cardsRef.current[1] = el)}
      >
        <div className="portfolio-card-image">
          <img src={pro2} alt="Mayweather Boxing + Fitness" />
        </div>
        <div className="portfolio-card-content">
          <h3 className="portfolio-card-title">
            Mayweather Boxing + Fitness
          </h3>
          <p className="portfolio-card-text">
            Mayweather Boxing + Fitness offers high-energy group workouts
            designed by Floyd Mayweather, combining boxing techniques with
            strength and cardio training. The program builds fitness,
            confidence, and community, welcoming everyone from beginners to
            athletes.
          </p>
          <div className="portfolio-card-tags">
            <span className="portfolio-tag">Web</span>
            <span className="portfolio-tag">B2C</span>
            <span className="portfolio-tag">Fitness</span>
          </div>
          <a href="https://mayweather.fit/" className="portfolio-readmore">
            Read more
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="portfolio-card portfolio-hidden"
        ref={(el) => (cardsRef.current[2] = el)}
      >
        <div className="portfolio-card-image">
          <img src={pro3} alt="XPT Life" />
        </div>
        <div className="portfolio-card-content">
          <h3 className="portfolio-card-title">
            XPT Life – Extreme Performance Training
          </h3>
          <p className="portfolio-card-text">
            XPT Life is a holistic performance lifestyle system founded by Laird
            Hamilton & Gabby Reece, built around three core pillars: Breathe,
            Move, Recover. It offers an app, immersive experiences,
            certifications, and a community approach to cultivate resilience,
            health, and adaptability.
          </p>
          <div className="portfolio-card-tags">
            <span className="portfolio-tag">Web</span>
            <span className="portfolio-tag">B2C</span>
            <span className="portfolio-tag">Health</span>
          </div>
          <a href="https://xptlife.com/" className="portfolio-readmore">
            Read more
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <section
        className="portfolio-cta portfolio-hidden"
        ref={ctaRef}
      >
        <h3 className="portfolio-cta-subtitle">Have an idea?</h3>
        <h1 className="portfolio-cta-title">
          Let's build together and make it reality.
        </h1>
        <button className="portfolio-btn">Get in Touch</button>
      </section>
    </section>
  );
};

export default Portfolio;
