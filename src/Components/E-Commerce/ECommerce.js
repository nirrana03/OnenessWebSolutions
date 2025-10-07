import React from "react";
import { motion } from "framer-motion";
import "./ECommerce.css";

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
    title: "Distribute your customers with effective e-commerce",
    text: [
      "Technology is constantly advancing and with these changes, consumers expect businesses to adapt. Grab the right tricks of the e-commerce trade, and you will see your sales sour. Load times, design, and functions should be up-to-date and enable instant gratification for users. From choosing the right platform for your business size and type, to implementing a design and tone to fit your business theme, there are a multitude of elements to turn over. Onenessweb take the stress out of e-commerce for you, by using our specialized skills to assist with migrations, updates and maintenance.",
      "Boost your potential with OnenessWeb’s e-commerce website dev…",
      "Contact with us"
    ],
    img: "https://via.placeholder.com/350x200",
    textAnim: animations.slideLeft,
    imgAnim: animations.slideRight,
  },
  {
    title: "Confirm! you have a perfect platform for your business",
    text: [
      "Positives. Every e-commerce platform has them. The question is – which e-commerce platform is designed to benefit your business? While one platform will drive results for one business, it won’t necessarily work effectively for yours. There’s no better time to excel in the online space, with an e-commerce platform that exceeds your customers’ expectations. Onenessweb’s e-commerce website developers can help and guide you to the right one, or upgrade your current platform as required.",
      "Contact us today for suitable e-commerce…",
      "Get in touch today"
    ],
    img: "https://via.placeholder.com/350x200",
    textAnim: animations.slideRight,
    imgAnim: animations.slideImageDown,
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* App Development (special case: slideDown for both) */}
      <div className="service-section ecommerce">
        <motion.div
          className="service-text"
          variants={animations.slideDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>E-commerce Solution</h2>
          <p>
            If you want to dive into the eCommerce sector and benefit substantially, you only need an online eCommerce website, with responsive and user-friendly features. You can imbibe a secure payment facility and receive user data with an online store. We’ve immense experience and skills to do deliver the eCommerce Solution. We integrate ERP to your online store, to manage the inventory and order system. We enable you to manage promotions and discount schemes. With our technical support and industry experience, you can easily meet your business requirements.
          </p>
        </motion.div>

      </div>

      {/* Other services mapped dynamically */}
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
