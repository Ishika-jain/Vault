import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import bg from "../images/backg_prev_ui.png";
import { Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className="screen">
      <Navbar className="navbar-custom">
        <Container >
          <Navbar.Brand href="#">My Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="screen-child">
            <Nav className="ml-auto nav-section1">
              <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/login">
                  <Button variant="warning">Login</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            
             
             
           
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", height:"80vh", width :"90vw"}}>
        <div>
        <img alt="bg" src={bg} className="bgimg"/>
        </div>
        <div >
          <h1>Get Set Go!</h1>
          <br></br>
          <h4>Stay prepared for when Oppurtunity knocks.</h4>
          <br></br>
          <Button variant="warning" size="lg">
            Join us here
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
