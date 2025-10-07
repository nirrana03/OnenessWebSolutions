import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dasboard";
import About from "./Components/About us/Aboutus";
import Services from "./Components/Services/Services";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact us/Contactus";
import Blog from "./Components/Blog/Blog";
import Appdev from "./Components/Appdev/Appdev"
import UiUx from "./Components/Uiux/Uiux"
import Ecommerce from "./Components/E-Commerce/ECommerce"
import Webdev from "./Components/Webdev/Webdev"
import Digital from "./Components/Digital Marketing/digi"
import Quality  from  "./Components/Quality Analyst/Quality"

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/appdev" element={<Appdev />} />
        <Route path="/webdev" element={<Webdev />} />
        <Route path="/quality-analyst" element={<Quality />} />
        <Route path="/digi-marketing" element={<Digital />} />
        <Route path="/uiux" element={<UiUx />} />
        <Route path="/e-commerce" element={<Ecommerce />} />




      </Routes>
      <Footer />
    </>
  );
}

export default App;
