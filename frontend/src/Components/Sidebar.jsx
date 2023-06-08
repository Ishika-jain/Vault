import React from "react";
import "../index.css";
import { useLocation } from "react-router-dom";

import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotesIcon from "@mui/icons-material/Notes";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const location = useLocation();
  const { pathname } = location;

  // Extract the username from the pathname
  const pathSegments = pathname.split("/");
  const username = pathSegments[2];

  return (
    <div className="sidebar" style={{ borderRight: "1px solid ", position: "fixed" }}>
      <div style={{ height: "10%", background: "white", display: "flex" }}>
        <Link to={`/homepage/${username}`} className="sidebar-item" style={{ width:"100%"}}>
          <div style={{ display: "flex", alignItems: "center", font: "27px bolder", width: "100%", justifyContent: "center", textAlign: "center", paddingTop:"20px"}}>
            VAULT
          </div>
        </Link>
      </div>
      <div style={{ marginTop: "0.2rem", marginLeft: "-2rem" }}>
        <ul style={{ listStyle: "none" }}>
          <Link to={`/homepage/${username}/folder`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/folder") ? "active" : ""}`}>
              <FolderSharedIcon />
              <span>About Me</span>
            </li>
          </Link>

          <Link to={`/homepage/${username}/documents`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/documents") ? "active" : ""}`}>
              <AccountCircleIcon />
              <span>Docs</span>
            </li>
          </Link>

          <Link to={`/homepage/${username}/projects`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/projects") ? "active" : ""}`}>
              <WorkHistoryIcon />
              <span>Projects</span>
            </li>
          </Link>

          <Link to={`/homepage/${username}/certificates`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/certificates") ? "active" : ""}`}>
              <NewspaperIcon />
              <span>Certifications</span>
            </li>
          </Link>

          <Link to={`/homepage/${username}/referals`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/referals") ? "active" : ""}`}>
              <AssignmentIndIcon />
              <span>Referals</span>
            </li>
          </Link>

          {/* <Link to={`/homepage/${username}/calendar`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/calendar") ? "active" : ""}`}>
              <CalendarMonthIcon />
              <span>Calendar</span>
            </li>
          </Link>

          <Link to={`/homepage/${username}/notes`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/notes") ? "active" : ""}`}>
              <NotesIcon />
              <span>Notes</span>
            </li>
          </Link>

          <Link to={`/homepage/${username}/track`} className="sidebar-item">
            <li className={`sidebar-list ${pathname.includes("/track") ? "active" : ""}`}>
              <ArtTrackIcon />
              <span>Track</span>
            </li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
