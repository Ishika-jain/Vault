import React from "react";
import "../index.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Extract the username from the pathname
  const pathSegments = pathname.split("/");
  const username = pathSegments[2];

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerHeight > 0.5 * window.screen.availHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {sidebarVisible ? (
        <div className="sidebar glass-effect">
          <div>
            <Link to={`/homepage/${username}/folder`} className="sidebar-item" style={{ width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", font: "27px bolder", width: "100%", justifyContent: "center", textAlign: "center", paddingTop: "20px", color: "blue" }}>VAULT</div>
            </Link>
          </div>
          <div style={{ marginTop: "0.2rem", marginLeft: "-2rem" }}>
            <ul style={{ listStyle: "none" }}>
              <Link to={`/homepage/${username}/folder`} className="sidebar-item">
                <li className={`sidebar-list ${pathname.includes("/folder") ? "active" : ""}`}>
                  <FolderSharedIcon style={{ color: "blue" }} />
                  <span>About Me</span>
                </li>
              </Link>

              <Link to={`/homepage/${username}/documents`} className="sidebar-item">
                <li className={`sidebar-list ${pathname.includes("/documents") ? "active" : ""}`}>
                  <AccountCircleIcon style={{ color: "blue" }} />
                  <span>Docs</span>
                </li>
              </Link>

              <Link to={`/homepage/${username}/projects`} className="sidebar-item">
                <li className={`sidebar-list ${pathname.includes("/projects") ? "active" : ""}`}>
                  <WorkHistoryIcon style={{ color: "blue" }} />
                  <span>Projects</span>
                </li>
              </Link>

              <Link to={`/homepage/${username}/certificates`} className="sidebar-item">
                <li className={`sidebar-list ${pathname.includes("/certificates") ? "active" : ""}`}>
                  <NewspaperIcon style={{ color: "blue" }} />
                  <span>Certifications</span>
                </li>
              </Link>

              <Link to={`/homepage/${username}/referals`} className="sidebar-item">
                <li className={`sidebar-list ${pathname.includes("/referals") ? "active" : ""}`}>
                  <AssignmentIndIcon style={{ color: "blue" }} />
                  <span>Referals</span>
                </li>
              </Link>

              {/* <Link to={`/homepage/${username}/calendar`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/calendar") ? "active" : ""}`}>
              <CalendarMonthIcon />
              <span>Calendar</span>
            </li>
          </Link> */}

              <Link to={`/homepage/${username}/calendar`} className="sidebar-item">
                <li className={`sidebar-list ${pathname.includes("/notes") ? "active" : ""}`}>
                  <CalendarMonthIcon style={{ color: "blue" }} />
                  <span>Calendar</span>
                </li>
              </Link>

              {/* <Link to={`/homepage/${username}/track`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/track") ? "active" : ""}`}>
              <ArtTrackIcon />
              <span>Track</span>
            </li>
          </Link> */}
            </ul>
          </div>
        </div>
      ) : (
        <div className="sidebar-hamburger">
          <div className="hamburger-icon" onClick={() => setSidebarVisible(true)}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
