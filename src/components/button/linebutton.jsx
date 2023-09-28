import styles from "./button.module.css";

export const ButtonLine = ({ type, text, disabled, onClick }) => {
  return (
    <button
      type={type}
      className={styles.buttonLine}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
