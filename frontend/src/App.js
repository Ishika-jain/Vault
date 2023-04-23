import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./Layout/Homepage";
import { LandingPage, Login, Signup } from "./Utils";
import { Certificates, Documents, JobApplications, Notes,Projects,Referals } from "./pages";


function App() {
  return (
    <>
  

    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={<LandingPage/>}/>
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/certs" element={<Certificates/>}/>
      <Route path="/docs" element={<Documents />}/>
      <Route path="/job" element={<JobApplications/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/referals" element={<Referals/>}/>
  

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
