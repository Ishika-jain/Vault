import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./pages/Homepage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";



function App() {
  return (
    <>
  

    <BrowserRouter>
    <Routes>
    <Route path="/" exact element={
    <LandingPage/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      {/* <Route path="/certs" element={<Certificates/>}/>
      <Route path="/docs" element={<Documents />}/>
      <Route path="/job" element={<JobApplications/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/notes" element={<Notes/>}/>
      <Route path="/referals" element={<Referals/>}/> */}
  

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
