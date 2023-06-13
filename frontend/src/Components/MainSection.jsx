import React from "react";
import Navibar from "./Navibar";
import Center from "./Center";
import "../index.css";
import Folder  from "../Components/Folder";
import Documents  from "../Components/Documents";
import Projects  from "../Components/Projects";
import Certificates  from "../Components/Certificates";
import Referals  from "../Components/Referals";
import Notes  from "../Components/Notes";
import Track  from "../Components/Track";
import { Route, Routes } from "react-router-dom";

const MainSection = () => {
  return (
    <div style={{ paddingLeft: "12%", width:"100%", background:"#a5a5f9", height:"100vh"}}>
    <Navibar />
    <Routes>
      <Route path="main" element={<Center/>}/>
      <Route path="folder" element={<Folder/>}/>
      <Route path="documents" element={<Documents/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="certificates" element={<Certificates/>}/>
      <Route path="referals" element={<Referals/>}/>
      <Route path="calendar" element={<Notes/>}/>
      <Route path="track" element={<Track/>}/>

    </Routes> 
    </div>
  );
};

export default MainSection;
