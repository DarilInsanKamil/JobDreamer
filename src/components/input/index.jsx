"use client";
import styles from "./input.module.css";
export const InputType = ({ type, onChange, name, value, pholder }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      name={name} 
      value={value}
      placeholder={pholder}
      className={styles.input}
    />
  );
};
