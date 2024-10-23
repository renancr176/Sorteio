import React from "react";
import Modal from "react-bootstrap/Modal";
import CountDown from './assets/videos/CountDown.mp4'

function CountDownModal(props) {
  return (
    <Modal {...props} fullscreen={true}>
      <Modal.Body>
        <div className="d-flex justify-content-center h-100">
          <div className="align-self-center">
            <video
              src={CountDown}
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
