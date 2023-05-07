import React from "react";
import "../index.css";

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
  return (
    <div className="sidebar" style={{ borderRight: "1px solid black" }}>
      <div style={{ height: "10%", background: "white", display: "flex" }}>
       
      <Link to="/homepage/main" className="sidebar-item">
         <div style={{ display: "flex", alignItems: "center", font: "27px bolder", width: "100%", justifyContent: "center"}}>
          VAULT
        </div>
        </Link>
      </div>
      <div style={{ marginTop: "0.2rem", marginLeft:"-2rem" }}>
        <ul style={{ listStyle: "none" }}>
          <Link to="/homepage/folder" className="sidebar-item">
            <li className="sidebar-list">
              <FolderSharedIcon  />
              <span>Folder</span>
            </li>
          </Link>

          <Link to="/homepage/documents" className="sidebar-item">
            <li className="sidebar-list">
              <AccountCircleIcon  />
              <span>Docs</span>
            </li>
          </Link>

          <Link to="/homepage/projects" className="sidebar-item">
            <li className="sidebar-list">
              <WorkHistoryIcon  />
              <span>Projects</span>
            </li>
          </Link>

          <Link to="/homepage/certificates" className="sidebar-item">
            <li className="sidebar-list">
              <NewspaperIcon />
              <span>Certifications</span>
            </li>
          </Link>

          <Link to="/homepage/referals" className="sidebar-item">
            <li className="sidebar-list">
              <AssignmentIndIcon />
              <span>Referals</span>
            </li>
          </Link>

          <Link to="/homepage/calendar" className="sidebar-item">
            <li className="sidebar-list">
              <CalendarMonthIcon  />
              <span>Calendar</span>
            </li>
          </Link>

          <Link to="/homepage/notes" className="sidebar-item">
            <li className="sidebar-list">
              <NotesIcon  />
              <span>Notes</span>
            </li>
          </Link>

          <Link to="/homepage/track" className="sidebar-item">
            <li className="sidebar-list">
              <ArtTrackIcon  />
              <span>Track</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
