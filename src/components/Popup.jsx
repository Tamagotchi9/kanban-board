// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Popup = ({ isOpen, close, modalTitle, children }) => {
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
