import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../images/backg_prev_ui.png";

const Home = () => {
  return (
    <div className="screen">
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#">My Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto nav-section1">
              <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
            
            <Nav className="ml-auto nav-section2">
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signup">Signup</Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <img alt="bg" src={bg} className="bgimg"></img>
      </div>
    </div>
  );
};

export default Home;
