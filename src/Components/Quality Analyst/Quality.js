import React from "react";
import { motion } from "framer-motion";
import "./Quality.css";
import appdev3 from "../Assests/appdev.jpg";

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
    title: "Crowdsourced Testing",
    text: [
      "One such paradigm software testing technique gaining popularity is “Crowdsourced Testing”. The scale, flexibility, cost effectiveness and fast turnaround it has to offer are all being spoken about at length in several forums. We, at QA InfoTech, have been delivering crowd testing services for our clients for a few years now and have been able to consistently expand our network of crowd testers across geographies and devices coverage as the primary two areas of focus.",
    ],
    img: "https://via.placeholder.com/350x200",
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
  {
    title: "Localization, Globalization & Linguistic Testing Services",
    text: [
      "Globalization has become one of the core areas of software testing given how products are reaching out to global markets and launching in several localized versions. We, at QA InfoTech, have built a very detailed QA methodology to specifically identify and address potential issues in the globalization process. We have a specialized test team trained and ready to work specifically on globalization testing and localization testing by leveraging a set of best practices that we have built to address the needs of this specialized test area.",
    ],
    img: "https://via.placeholder.com/350x200",
    textAnim: animations.slideRight,
    imgAnim: animations.slideImageDown,
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* App Development (special case: full width, no image) */}
      <div className="service-section quality">
        <motion.div
          className="service-text"
          variants={animations.slideDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Quality Analyst</h2>
          <p>
            Every organization needs a proper software testing process to keep track of product quality. Onenessweb Solution believes in ‘Prevention Over Inspection’.We handle QA Testing services as a vital part of every project. Our Quality Analyst professionals deliver solutions with minimum risks. We undertake parameters like scalability, behavioral, functionality, compatibility, load, and performance testing as a part of our development process. You can also hire dedicated best QA Experts.
          </p>
        </motion.div>
      </div>

      {/* Other services */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`service-section ${index % 2 !== 0 ? "reverse" : ""}`}
        >
          <motion.div
            className="service-text"
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
            className="service-image"
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

export default Services;
