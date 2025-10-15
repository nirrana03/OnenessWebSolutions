import React from "react";
import { motion } from "framer-motion";
import "./Webdev.css";
import webdev1 from "../Assests/WebDev_Assistance.jpeg";
import webdev2 from "../Assests/WebDev_Solutions.jpeg";
import webdev3 from "../Assests/WebDev_Devices_Help.jpeg";

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
    title: "Be of assistance celebrated user experiences",
    text: [
      "Web development includes everything from site-building and mobile app development to marketing and advertising. It’s time to ride the digital wave. Are you connecting with your user online? With the huge jump in the number of people accessing websites to answer their needs, your digital services are more important now more than ever. Be prepared with a seamless website. After all, the ultimate goal for web development is to drive results for your business. Since 2016, OnenessWeb has been committed to generating quality web development, with skilled web developers delivering digital solutions to both INDIA and global businesses.",
      "To serve exceptional user experience...",
      "Contact us now.",
    ],
    img: webdev1,
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
  {
    title: "Grab your exception with separate solutions",
    text: [
      "Whether your site focuses on showcasing your services, selling your products, or supporting your customers, your compartment requires specific site functionalities so both you and your customers can get the most out of your site. Your business is unique – it has different values, different needs, and a different theme to any other business on the market. For this reason, the approach to your web development should be fitted to you, your size and who you’re advising your message to. OnenessWeb will listen to your requirements and develop honest digital solutions that follow these needs.",
      "For Web Development inquiry…",
      "Connect with us",
    ],
    img: webdev2,
    textAnim: animations.slideRight,
    imgAnim: animations.slideImageDown,
  },
  {
    title: "Guaranteed help on all devices",
    text: [
      "A responsive web design will present your website flawlessly on all devices, regardless of screen size. When your site design isn’t rendered correctly, faulty layout, glitches and information issues will arise. Not the impression you want to give. Are you up to speed? High-performing sites need to perform exceptionally well on every type of device, given the diverse ways users access the web. Give your target audience an easy way to reach you, without the technical issues that drive users to exit your site. Get the best outcome with our web developers putting user experience as top priority.",
      "For professional website development...",
      "Get in touch today",
    ],
    img: webdev3,
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
];

const Webdev = () => {
  return (
    <div className="webdev-container">
      {/* Intro Section */}
      <div className="webdev-intro-section">
        <motion.div
          className="webdev-intro-text"
          variants={animations.slideDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Web Development</h2>
          <p>
            We will build website tailored to your specific business needs that
            work across all devices. From strategy to design and development, we
            are here through every step of the website development process. A
            modern website is a crucial part of running any successful business.
            In this competitive market, you need web applications that are
            functional and delights user. We, as an expert web development
            company, Onenessweb Solutions build websites that are high quality
            and robust. We’ve got you covered from designing to developing,
            post-deployment cloud and maintenance services. Our talent includes
            developing Progressive Web Apps (PWAs), commercial and enterprise
            portals, custom web applications, large-scale websites, and SaaS
            solutions that achieve your complete business needs.
          </p>
        </motion.div>
      </div>

      {/* Dynamic Service Sections */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`webdev-service-section ${
            index % 2 !== 0 ? "webdev-service-reverse" : ""
          }`}
        >
          <motion.div
            className="webdev-service-text"
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
            className="webdev-service-image"
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

export default Webdev;
