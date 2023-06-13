import React from "react";
import "../index.css";
const About = () => {
  return (
    <div id="Aboutus">
      <h1 className="title" style={{ textAlign: "center", marginTop: "50px", fontSize: "40px" }}>
        About Us
      </h1>
      <div className="about-us-container glass-effect">
        <div className="content" style={{ padding: "50px" }}>
          <p>
            Simplify document management with Vault. Store, organize, and access all your placement-related files in one secure place. Effortlessly manage resumes, cover letters, certificates, and more, ensuring they're readily available when you need them. </p>
            <p>Vault offers a user-friendly interface designed for simplicity and efficiency. Upload and categorize documents with ease, and retrieve them quickly with just a few clicks. Your documents are secure with advanced encryption and robust data protection measures.</p>
            <p>Collaborate seamlessly by sharing documents with colleagues, mentors, or potential employers. Vault streamlines the process, making document collaboration a breeze.</p>
            <p>Join Vault today and focus on your career goals while we take care of your document organization and management needs. </p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
