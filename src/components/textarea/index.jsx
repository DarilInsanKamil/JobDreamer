import styles from './textarea.module.css'
export const TextArea = ({label, onChange, name, rows, cols}) => {
  return (
    <div className={styles.container}> 
      <label>{label}</label>
      <textarea
        onChange={onChange}
        name={name}
        rows={rows}
        cols={cols}
      ></textarea>
    </div>
  );
};
