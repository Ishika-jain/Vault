import React, { useState } from "react";
import img from "../images/bg.png";
import { useParams } from "react-router-dom";

const Folder = () => {
  const [resume, setResume] = useState(null);
  const [cv, setCv] = useState(null);
  const [description, setDescription] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [websitePreview, setWebsitePreview] = useState("");
  const { username } = useParams();

  const handleResumeChange = (event) => {
    const file = event.target.files[0];
    setResume(file);
  };

  const handleCvChange = (event) => {
    const file = event.target.files[0];
    setCv(file);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const handleWebsiteLinkChange = (event) => {
    const value = event.target.value;
    setWebsiteLink(value);
  };

  const handleWebsitePreviewChange = (event) => {
    const value = event.target.value;
    setWebsitePreview(value);
  };

  return (
    <div>
      {/* Circle Profile Image, User Name, and User Designation */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "block", width: "100%", textAlign: "center", marginBottom: "5%" }}>
          <h2 style={{marginBottom:"2%"}}> Welcome to Vault, {username}! </h2>
          <div style={{ display: "flex" }}>
            <img src={img} alt="Profile" style={{ width: "200px", height: "200px", borderRadius: "25px", marginLeft: "5%", marginRight:"10%" }} />

            <textarea id="description" rows="7" value={description} onChange={handleDescriptionChange} placeholder=" Something about me... " style={{ paddingTop: "2%", marginTop: "0%", resize: "none", width: "60%", borderRadius:"25px" }}>
            </textarea>
          </div>
        </div>
      </div>

      {/* Resume and CV File Inputs */}
      <div style={{ background: "", marginBottom: "5%", display: "flex", alignContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "5%" }}>
          <label htmlFor="resume">
            <h2>Resume:</h2>
          </label>
          <input type="file" id="resume" accept=".pdf" onChange={handleResumeChange} style={{ background: "" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginLeft: "5%" }}>
          <label htmlFor="cv">
            <h2>CV:</h2>
          </label>
          <input type="file" id="cv" accept=".pdf" onChange={handleCvChange} style={{ background: "" }} />
        </div>
      </div>

      {/* Description */}

      {/* Website Link and Preview */}
      <div style={{ background: "", marginBottom: "6%", display: "flex", alignContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "5%" }}>
          <label htmlFor="websiteLink">
            <h2>Portfolio/Github Link:</h2>
          </label>
          <input type="text" id="websiteLink" value={websiteLink} onChange={handleWebsiteLinkChange} style={{ background: "" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginLeft: "5%" }}>
          <label htmlFor="websitePreview">
            <h2>LinkedIn Link:</h2>
          </label>
          <input type="text" id="websitePreview" value={websitePreview} onChange={handleWebsitePreviewChange} style={{ background: "" }} />
        </div>
      </div>
    </div>
  );
};

export default Folder;
