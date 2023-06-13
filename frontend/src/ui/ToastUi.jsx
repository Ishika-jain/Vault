import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "../index.css"

const ToastUi = ({ message, setShowToast }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    setShowToast(false);
  };

  return (
    <Toast onClose={handleClose} show={show} delay={3000} autohide >
      <Toast.Header>
        <strong className="mr-auto"> <></></strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastUi;
