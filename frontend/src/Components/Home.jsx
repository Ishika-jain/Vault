import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import bg from "../images/backg_prev_ui.png";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Modal from "react-modal";
import LoginSignup from "../pages/LoginSignup";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

Modal.setAppElement("#root");
const Home = () => {
  const navigate = useNavigate();
  const [user, setLoginUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/homepage");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log(isLoggedIn);
  console.log(user);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      padding: "-10px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "20px",
      background: "rgba(255, 255, 255, 0.5)",
    },
  };

  return (
    <div className="screen">
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand href="#"><img src={logo} style={{width:"50px"}}></img>Vault</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="screen-child">
            <Nav className="ml-auto nav-section1">
              <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Aboutus">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Features">Features</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#reviews">Reviews</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Button variant="warning" onClick={openModal}>
                    Login
                  </Button>
                  <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                    <LoginSignup onLogin={handleLogin} setLoginUser={setLoginUser} />
                  </Modal>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "80vh", width: "90vw" }}>
        <div>
          <img alt="bg" src={bg} className="bgimg" />
        </div>
        <div>
          <h1>Get Set Go!</h1>
          <br></br>
          <h4>Stay prepared for when Oppurtunity knocks.</h4>
          <br></br>
          <Button variant="warning" size="lg" onClick={openModal}>
            Join us here
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
