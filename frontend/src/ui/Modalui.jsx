import React, { useState } from "react";
import Modal from "react-modal";
import LoginSignup from "../pages/LoginSignup";

Modal.setAppElement("#root");

const Modalui = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
    <div>
      <button onClick={openModal}>HI</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <LoginSignup />
      </Modal>
    </div>
  );
};

export default Modalui;
