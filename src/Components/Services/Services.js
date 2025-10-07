import React from "react";
import { motion } from "framer-motion";
import "./Services.css";
import code from "../Assests/code.jpg";
import design from "../Assests/design.jpg";
import care from "../Assests/care.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const popDot = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: "spring", stiffness: 200 } },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Services = () => {
  return (
    <section className="services-section">
      {/* Intro */}
      <div className="intro">
        <p className="subtitle">Our Services</p>
        <h1>We Design, Code and Care</h1>
        <p className="desc">
          OnenessWeb is a dynamic and innovative Creative Tech Agency rooted in
          India. Our mission is to assist our clients in overcoming real-world
          challenges through cutting-edge digital solutions.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline">
        {/* DESIGN */}
        <motion.div
          className="timeline-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="timeline-img" variants={slideLeft}>
            <img src={design} alt="Design" />
          </motion.div>

          <motion.div className="timeline-content" variants={slideRight}>
            <h3>Design</h3>
            <p>
              Superior user experience for your digital product. From concept
              definition to UI design, we engage the real end users.
            </p>
            <ul>
              <li>Research and Understanding</li>
              <li>Sketching and Validation</li>
              <li>Detailed UI Design</li>
            </ul>
            <a href="#">See All →</a>
          </motion.div>

          <motion.span
            className="timeline-dot blue"
            variants={popDot}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* CODE */}
        <motion.div
          className="timeline-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="timeline-img" variants={slideLeft}>
            <img src={code} alt="Code" />
          </motion.div>

          <motion.div className="timeline-content" variants={slideRight}>
            <h3>Code</h3>
            <p>
              Agile development of mobile apps, websites and cloud services with
              a quality mindset. We utilize the latest open-source tech to make
              your software work.
            </p>
            <ul>
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>Back-end and Cloud</li>
            </ul>
            <a href="#">See All →</a>
          </motion.div>

          <motion.span
            className="timeline-dot orange"
            variants={popDot}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>

        {/* CARE */}
        <motion.div
          className="timeline-item"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="timeline-img" variants={slideLeft}>
            <img src={care} alt="Care" />
          </motion.div>

          <motion.div className="timeline-content" variants={slideRight}>
            <h3>Care</h3>
            <p>
              Continuous services to support your operational phase. We make
              sure your software runs smoothly and is improved over time.
            </p>
            <ul>
              <li>Further Development</li>
              <li>Support Services</li>
              <li>Maintenance</li>
            </ul>
            <a href="#">See All →</a>
          </motion.div>

          <motion.span
            className="timeline-dot dark"
            variants={popDot}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />
        </motion.div>
      </div>

      {/* CTA */}
      <motion.section
        className="cta"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3>Have an idea?</h3>
        <h1>Let's build together and make it reality.</h1>
        <button className="btn">Get in Touch</button>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        className="services"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h3>Values</h3>
        <h1>
          We are driven by a set of core values that shape our company culture
        </h1>

        <div className="service-grid">
          <div className="service-card">
            <h3>Collaboration</h3>
            <p>
              We believe in the power of collaboration, where ideas are freely
              shared, and teamwork is encouraged. We work closely with our
              clients, involving them in the decision-making process and
              ensuring that their input is valued and incorporated into the
              final deliverables.
            </p>
          </div>
          <div className="service-card">
            <h3>Quality</h3>
            <p>
              We have a strong commitment to quality in everything we do. We
              take pride in delivering high-quality solutions that meet the
              highest standards of excellence. We pay meticulous attention to
              detail, ensuring that every project meets the unique requirements
              of our clients.
            </p>
          </div>
          <div className="service-card">
            <h3>Growth</h3>
            <p>
              We foster a culture of continuous growth, encouraging learning and
              adaptation. We are committed to staying ahead of the curve to
              ensure that we provide the best solutions and services to our
              clients.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Services;
