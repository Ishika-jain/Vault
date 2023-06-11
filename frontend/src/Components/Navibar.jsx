import React from "react";
import "../index.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthnContext";

const Navibar = () => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await axios.post("https://vaultbackend.onrender.com/api/logout");
      window.location.href = "/"; // Redirect the user to the home page
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="navibar">
      <div className="custom-breadcrumb">
        <Breadcrumb>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <p> </p>
      </div>
      <div className="right-icons">
        {/* <DarkModeOutlinedIcon />
        <div className="search-box">
          <SearchOutlinedIcon />
        </div>
        <div className="toggle-mode"></div>
        <div className="profile-icon"></div> */}
        <div className="signout">
          <button onClick={handleLogout}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default Navibar;
