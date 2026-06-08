import React from "react";
import Navbar from "../Section/Navbar.jsx"
import Header from "../Section/Header.jsx";
import Skills from "../Section/Skills.jsx";
import About from "../Section/About.jsx";
import Journey from "../Section/Journey.jsx";
import Projects from "../Section/Projects.jsx";
import Footer from "../Section/Footer.jsx";
import Contact from "../Section/Contact.jsx";

const Design = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Journey/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Design;
