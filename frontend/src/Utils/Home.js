import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap";
import bg from "../images/backg_prev_ui.png";


const Home = () => {
  return (
    <div>
         <Navbar expand='lg' className='navbar-custom'>
          <Container>
            <Navbar.Brand href="#">My Brand</Navbar.Brand>

            <Nav className="ml-auto">
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
            <Nav className="ml-auto">
                <Nav.Item>
              <Nav.Link href="#">Login</Nav.Link>
                </Nav.Item>
              <Nav.Item>
              <Nav.Link href="#">Signup</Nav.Link>
              </Nav.Item>
                
            </Nav>
          </Container>
        </Navbar>
        <div>
           <img alt="bg" src={bg} className="bgimg"></img>
        </div>

        
    </div>
  )
}

export default Home