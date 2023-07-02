import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import Homepage from "./pages/Homepage";
import Center from "./Components/Center";
import Folder from "./Components/Folder";
import Documents from "./Components/Documents";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Referals from "./Components/Referals";
import Notes from "./Components/Notes";
import Track from "./Components/Track";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Context/AuthnContext";
import KanbanBoard from "./Components/KanbanBoard";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/api/login')
      .then(response => {
        // setUser(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

 

  return (
    <div style={{background:"rgb(154, 193, 248)"}}>
     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>

      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />}  />
            <Route path="/homepage/:username/*" element={isLoggedIn ? <Homepage /> : <Navigate to="/" />} >
              <Route path="main" element={<Center />} />
              {/* <Route path="folder" element={<Folder />} /> */}
              <Route path="documents" element={<Documents />} />
              <Route path="projects" element={<Projects />} />
              <Route path="certificates" element={<Certificates />} />
              <Route path="referals" element={<Referals />} />
              <Route path="calendar" element={<Notes />} />
              <Route path="track" element={<Track />} />
              <Route path="kanban" element={<KanbanBoard />} />

              </Route>
          </Routes>
        </div>
      </BrowserRouter>
     </AuthContext.Provider>
    </div>
  );
}

export default App;
