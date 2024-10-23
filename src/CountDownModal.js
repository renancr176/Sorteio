import React, { useEffect, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";

function CountDownModal(props) {
  return (
    <Modal {...props} fullscreen={true}>
      <Modal.Body>
        <div className="d-flex justify-content-center h-100">
          <div className="align-self-center">
            <video
              src="./video/CountDown.mp4"
              type="video/mp4"
              class="object-fit-cover"
              autoPlay
            ></video>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CountDownModal;
