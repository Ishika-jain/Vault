import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Center from "./Components/Center";
import Folder from "./Components/Folder";
import Documents from "./Components/Documents";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Referals from "./Components/Referals";
import Calendar from "./Components/Calendar";
import Notes from "./Components/Notes";
import Track from "./Components/Track";
import Modalui from "./ui/Modalui";
import LoginSignup from "./pages/LoginSignup";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />

            <Route path="/homepage/*" element={<Homepage />}>
              <Route path="main" element={<Center />} />
              <Route path="folder" element={<Folder />} />
              <Route path="documents" element={<Documents />} />
              <Route path="projects" element={<Projects />} />
              <Route path="certificates" element={<Certificates />} />
              <Route path="referals" element={<Referals />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="notes" element={<Notes />} />
              <Route path="track" element={<Track />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
