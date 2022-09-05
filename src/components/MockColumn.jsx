import styles from "../assets/styles/mockColumn.module.scss";

export const MockColumn = ({ name }) => {
  return <div className={styles.root}>{name}</div>;
};
