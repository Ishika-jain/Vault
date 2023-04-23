import React from "react";
import "./Utils.css";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <div className="gradient-bg">
        <Home />
        <About />
        <Contact />
        
      </div>
    </>
  );
};

export default LandingPage;
