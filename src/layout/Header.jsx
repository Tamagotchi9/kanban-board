import { useDispatch } from "react-redux";
import styles from "../assets/styles/header.module.scss";
import { modalSlice } from "../store/modules/modal";
import Form from "react-bootstrap/Form";

export const Header = ({ theme, handleTheme }) => {
  const dispatch = useDispatch();
  const openModal = () => dispatch(modalSlice.actions.open());

  return (
    <header className={styles.header}>
      <button onClick={openModal} className={styles.addBtn}>
        Add ticket
      </button>
      <Form.Check
        type="switch"
        id="custom-switch"
        value={theme}
        onChange={() => handleTheme(!theme)}
        label="Theme"
      />
    </header>
  );
};
