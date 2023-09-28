import styles from "./button.module.css";

export const Button = ({ text, onClick }) => {

  return (
    <button
      type="button"
      className={styles.btn_primary}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
