import React from "react";
import { motion } from "framer-motion";
import "./Uiux.css";
import uiuxImg1 from "../Assests/UiUx_UserExperience.jpeg";
import uiuxImg2 from "../Assests/UiUx_Enterprise.jpeg";

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
    title: "User Experience",
    text: [
      "UI/UX design is a defining factor for any digital product these days. We’re a user experience and UI design agency focused on improving conversion and increasing customer engagement. Our UI/UX design capabilities don’t stop at mobile apps, web applications, or multi-platform digital experiences. As a UX design agency, we create products and services that provide outstanding usability while fully embracing your brand’s personality.",
      "To serve exceptional user experience…",
      "Contact us now",
    ],
    img: uiuxImg1,
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
  {
    title: "Enterprise UX",
    text: [
      "From a logical user journey and content hierarchy to a mobile-first responsive web design, our team of design experts will keep your website ahead of the curve. With almost 2 decades of web design experience, our team can help your brand come to life online.We’re a UI/UX design agency that believes business software deserves the user-friendliness and aesthetics of best-in-class consumer apps.",
      "We’re a digital agency that transforms legacy enterprise platforms into delightful, consumer-grade experiences and design new B2B products that people love using.",
      "For Enterprise UX inquiry…",
      "Connect with us",
    ],
    img: uiuxImg2,
    textAnim: animations.slideRight,
    imgAnim: animations.slideImageDown,
  },
];

const Uiux = () => {
  return (
    <div className="uiux-container">
      {/* Intro Section */}
      <div className="uiux-intro-section">
        <motion.div
          className="uiux-intro-text"
          variants={animations.slideDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Ui/Ux Design</h2>
          <p>
            We take an incisional approach to craft visually appealing designs
            that enable users to feel good and navigate the app with minimum
            friction. User research, behavior analysis, and strong consumer
            insights reveal problems and demographics that your product can
            target and couple with information architecture, we deliver you a
            pixel-perfect and visually appealing clickable prototype. Let
            Onnessweb Solution be your partner when it comes to your product’s
            UI/UX.
          </p>
        </motion.div>
      </div>

      {/* Dynamic Service Sections */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`uiux-service-section ${
            index % 2 !== 0 ? "uiux-service-reverse" : ""
          }`}
        >
          <motion.div
            className="uiux-service-text"
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
            className="uiux-service-image"
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

export default Uiux;
