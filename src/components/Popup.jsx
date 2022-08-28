// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectModalState } from "../store/modules/modal/selectors";
import { modalSlice } from "../store/modules/modal";

export const Popup = ({ children }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => selectModalState(state));

  const close = () => dispatch(modalSlice.actions.close());

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Create ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};
