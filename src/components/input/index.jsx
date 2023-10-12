"use client";
import Image from "next/image";
import styles from "./input.module.css";
export const InputType = ({ label, type, onChange, name, value, pholder }) => {
  return (
    <div>
      <label>{label}</label>
      <div className={styles.input_container}>
        <input
          type={type}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={pholder}
          className={styles.input_icon}
        />
      </div>
    </div>
  );
};
export const InputTypeIcon = ({
  label,
  icon,
  type,
  onChange,
  name,
  value,
  pholder,
  handleShow,
}) => {
  return (
    <div>
      <label>{label}</label>
      <div className={styles.input_container}>
        <input
          type={type}
          onChange={onChange}
          name={name}
          value={value}
          placeholder={pholder}
          className={styles.input_icon}
        />
        <Image
          src={icon}
          width={18}
          height={18}
          alt="icon"
          className={styles.icon}
          onClick={handleShow}
        />
      </div>
    </div>
  );
};
