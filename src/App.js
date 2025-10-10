import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Dashboard/Dasboard";
import About from "./Components/About us/Aboutus";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact us/Contactus";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blog from "./Components/Blog/Blog";
import Appdev from "./Components/Appdev/Appdev";
import Webdev from "./Components/Webdev/Webdev";
import Uiux from "./Components/Uiux/Uiux";
import Ecommerce from "./Components/E-Commerce/ECommerce";
import DigitalMarketing from "./Components/Digital Marketing/digi";
import QualityAnalyst from "./Components/Quality Analyst/Quality";

import "./App.css";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/appdev" element={<Appdev />} />
          <Route path="/webdev" element={<Webdev />} />
          <Route path="/uiux" element={<Uiux />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/digi-marketing" element={<DigitalMarketing />} />
          <Route path="/quality-analyst" element={<QualityAnalyst />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
