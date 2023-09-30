import styles from "./button.module.css";

export const Button = ({ text, onClick, type }) => {

  return (
    <button
      type={type || 'button'}
      className={styles.btn_primary}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
