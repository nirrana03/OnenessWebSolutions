import React from "react";
import { motion } from "framer-motion";
import "./Digi.css";
import digiImg1 from "../Assests/Digi_Strategy.jpeg";
import digiImg2 from "../Assests/Digi_SEO.jpeg";

// Animation variants
const animations = {
  slideDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  },
  slideImageDown: {
    hidden: { opacity: 0, y: -80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  },
};

// Services Data
const servicesData = [
  {
    title: "Digital Marketing Strategy",
    text: [
      "Our digital marketing team specialize in creating unique, engaging and creative strategies for brands. Every strategy starts with insight – we will help you understand your customers and the opportunities in the digital space. Our goal is to ensure that every digital decision you make is strategic and driven by a clear set of defined goals. By creating an enterprise SEO strategy that fits within the existing framework of your goals, your website will drive awareness, engagement, retention, and long-term success.",
      "For your Digital Strategy…",
      "Contact us now.",
    ],
    img: digiImg1,
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
  {
    title: "Enterprise SEO",
    text: [
      "Larger organizations with larger websites need Enterprise SEO. An enterprise-level SEO engagement is different from your typical SEO account. It requires more expertise of the team members, who become an integral part of your overall marketing team. Often, we find the analytics more involved, the account is more technical due to existing infrastructure and the work is more intricate.Enterprise search engine optimization (SEO) will do more than help your website rank well on Google, Bing, and Yahoo.",
      "For your Enterprise SEO Inquiry…",
      "Contact us now",
    ],
    img: digiImg2,
    textAnim: animations.slideRight,
    imgAnim: animations.slideImageDown,
  },
];

const DigitalMarketing = () => {
  return (
    <div className="digi-container">
      {/* Intro Section */}
      <div className="digi-section digi-intro">
        <motion.div
          className="digi-text"
          variants={animations.slideDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Digital Marketing</h2>
          <p>
            Digital marketing of your products is critical to stay ahead of your competitors. The
            past decade has opened a whole new set of opportunities for any business on the
            internet. At Onenessweb Solutions, we have a team of accomplished and skilled marketers
            who have a flair for storytelling and ardor for Digital Marketing campaign. Market
            trends, SEO, website optimization, targeted keywords, result-oriented strategies and
            captivates a huge audience globally, that deliver the desired outcomes.
          </p>
        </motion.div>
      </div>

      {/* Other Services */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`digi-section ${index % 2 !== 0 ? "digi-section-reverse" : ""}`}
        >
          <motion.div
            className="digi-text"
            variants={service.textAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>{service.title}</h2>
            {service.text.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </motion.div>

          <motion.img
            src={service.img}
            alt={service.title}
            className="digi-image"
            variants={service.imgAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </div>
      ))}
    </div>
  );
};

export default DigitalMarketing;
