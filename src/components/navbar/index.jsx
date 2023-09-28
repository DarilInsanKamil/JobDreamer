import Image from "next/image";
import styles from "./navbar.module.css";
import { Button, ButtonLine } from "..";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <section>
          <Image
            src={"/comprofile.svg"}
            width={140}
            height={40}
            alt="logo"
            draggable="false"
            className={styles.img}
          />
        </section>
      <ul className={styles.list_container}>
        <li className={styles.items}>Home</li>
        <li className={styles.items}>Upload Job</li>
        <li className={styles.items}>About us</li>
      </ul>
      <div className={styles.button_container}>
        <ButtonLine text={"Daftar"}/>
        <Button text={"Masuk"}/>
      </div>
    </nav>
  );
};
