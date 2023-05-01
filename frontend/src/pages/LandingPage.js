import React from "react";
import  '../index.css'
import Home from "../Components/Home";
import About from "../Components/About";
import Features from "../Components/Features";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

const LandingPage = () => {
  return (
    <>
      <div className="gradient-bg">
        <Home />
        <About />
        <Features/>
        <Reviews/>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
