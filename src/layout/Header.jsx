import styles from "../assets/styles/header.module.scss";
import { MoonFill, SunFill } from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import classnames from "classnames";

export const Header = ({ theme, handleTheme, showModal }) => {
  return (
    <header className={styles.header}>
      <Button variant="success" size="lg" onClick={showModal}>
        Add ticket
      </Button>
      <div>
        <label htmlFor="checkbox" className={styles.label}>
          <MoonFill className={styles.iconMoon} />
          <SunFill className={styles.iconSun} />
          <div
            className={classnames(styles.ball, {
              [styles.ballChecked]: theme,
            })}
          ></div>
        </label>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="checkbox"
          value={theme}
          onChange={() => handleTheme(!theme)}
        />
      </div>
    </header>
  );
};
