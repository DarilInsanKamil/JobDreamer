import styles from "./select.module.css";

export const Select = ({ name, data, onChange }) => {
  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        name={name}
        id="pet-select"
        onChange={onChange}
      >
        {data.map((res, idx) => (
          <option className={styles.option} key={idx} value={res}>
            {res}
          </option>
        ))}
      </select>
    </div>
  );
};
