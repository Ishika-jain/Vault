import React  from "react";
// import { useState } from "react";
import "./component.css"

const Center = () => {
  // const [selectedFile, setSelectedFile] = useState();
  // const [preview, setPreview] = useState();

  const handleFileInput = (e) => {
    // setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send file to db and store
  };

  return (
    <div className="Profile-landing">
      <div className="upperhalf">
        <div className="profile">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png"
            alt="img"
          />
        </div>
        <div className="desc">
          <h4>About me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente in
            cupiditate expedita vero architecto, laudantium veniam nisi ipsa
            quia explicabo inventore nam natus animi, culpa aliquam dicta
            nostrum ipsum deleniti?
          </p>
          <h4>Portfolio</h4>
          <p>
            https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/user-profile-icon.png
          </p>
        </div>
      </div>

      <div className="lowerhalf">
        <div className="resume">
          <h4>Resume:</h4>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInput} />

            <button type="submit">Upload</button>
          </form>
        </div>
        <div className="cv">
          <h4>CV:</h4>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInput} />

            <button type="submit">Upload</button>
          </form>
        </div>
      </div>

      <div className="lowerlowerhalf">
        <h2> Resume drafts / Older versions</h2>
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileInput} />

            <button type="submit">Upload</button>
          </form>
      </div>
    </div>
  );
};

export default Center;
