import React from "react";
import "../index.css"
const About = () => {
  return (
    <div id="Aboutus">
      <h1 className="title" style={{textAlign:"center", marginTop:"50px", fontSize:"40px"}}>About Us</h1>
      <div className="about-us-container glass-effect">
      <div className="content" style={{padding:"50px"}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor mi eu elit bibendum rutrum. Duis lobortis ex in dolor bibendum, eu molestie lacus rhoncus. Morbi feugiat mauris quis vestibulum bibendum. Aliquam bibendum nulla eget nibh ultrices, nec bibendum sapien ultricies. Sed vitae tellus quis turpis pulvinar vehicula. 
        </p>
        <p>
          Donec id quam sit amet nunc congue iaculis. Nulla facilisi. Sed faucibus ultrices ante, eu convallis massa ultrices sed. Nam et nulla vel massa venenatis posuere eget a velit. Phasellus efficitur turpis in ipsum convallis, quis varius sapien varius. 
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
