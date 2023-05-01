import React from "react";
import  '../index.css'
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Navibar = () => {
  return (
    <div className="navibar">
      <div className="custom-breadcrumb">
        <Breadcrumb >
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="right-icons">
        <div className="search-box"></div>
        <div className="toggle-mode"></div>
        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default Navibar;
