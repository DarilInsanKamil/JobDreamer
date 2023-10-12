import { Button, InputType } from "..";
import styles from "./searchbar.module.css";
export const SearchBar = ({ onSearch }) => {
  return (
    <div className={styles.container}>
      <h1>Find Your Dream Job</h1>
      <p>
        Temukan lowongan pekerjaan di berbagai industri dan tingkat pengalaman.
        Cari pekerjaan yang sesuai dengan keahlian Anda dan mulailah perjalanan
        karir Anda
      </p>
      <form onSubmit={onSearch} className={styles.control_container}>
        <InputType
          type={"text"}
          name={"search"}
          pholder={"Cari pekerjaan"}
        />
        <Button text={"Search"} type={"submit"} />
      </form>
    </div>
  );
};
