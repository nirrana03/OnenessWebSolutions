import React from "react";
import { motion } from "framer-motion";
import "./Appdev.css";
import appdev1 from "../Assests/AppDev_Design_Based.jpeg";
import appdev2 from "../Assests/AppDev_CloudBackend.jpeg";
import appdev3 from "../Assests/AppDev_Monitoring.jpeg";

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
    title: "Design based on buyer persona",
    text: [
      "Our approach starts from the competitor and the market analysis to understand the key players. We work with clients so Design and Product planning would be the main time consuming part at the very beginning where clients are involved to give feedbacks to the project.",
      "Onenessweb graphic design team will work to explore and produce the right solution that matches the look and feel of the brand.",
      "Contact us now.",
    ],
    img: appdev1,
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
  {
    title: "Development and cloud backend",
    text: [
      "Our deep experience in Fintech, Luxury and Travel fields and the highly custom APIs and backend solutions will make the difference to set up the most appropriate environment to ensure the best performance of your app.",
      "Our team experts in real-time data running in native app development for both iOS and Android operating systems, Cross-platform app, and modern web application in a mobile first approach will work to create the best app that fits your needs. Connect with us.",
    ],
    img: appdev2,
    textAnim: animations.slideRight,
    imgAnim: animations.slideImageDown,
  },
  {
    title: "24/7 Monitoring and Maintenance",
    text: [
      "Our experts provide application maintenance and IT infrastructure support to enhance the scalability, performance, and portability of mission-critical systems with your specific business requirements in mind.",
      "We provide scalable cloud backend for mobile app maintenance that prolong uptime, support a larger user base, optimize server performance, improve UI/UX, enhance business process management (BPM) processes, more easily comply with regulatory concerns and keep integrated web services running smoothly. Contact us now.",
    ],
    img: appdev3,
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
];

const AppDevelopment = () => {
  return (
    <div className="appdev-container">
      {/* App Development (Intro section) */}
      <div className="appdev-section appdev-intro">
        <motion.div
          className="appdev-text"
          variants={animations.slideDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>App Development</h2>
          <p>
            The “mobile“ approach becomes a strategic choice to provide a decidedly dynamic image
            of one’s business, increase productivity, cut costs and continue to be competitive on
            the market also in the future.
          </p>
          <p>
            We believe in mobile-first strategy and work closely with our clients to research and
            understand their needs, transform their vision to ship product experiences to mobile
            screens, which increases the operations and engagement efficiency of the consumers.
          </p>
          <p>
            We abode a team of mobile experts, skilled in Native and cross-platform app development.
            We follow an efficient and streamlined process in place to develop mobile applications
            with transparent communication that helps clients stay confident in their endeavors.
          </p>
        </motion.div>
      </div>

      {/* Other Services */}
      {servicesData.map((service, index) => (
        <div
          key={index}
          className={`appdev-section ${index % 2 !== 0 ? "appdev-section-reverse" : ""}`}
        >
          <motion.div
            className="appdev-text"
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
            className="appdev-image"
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

export default AppDevelopment;
