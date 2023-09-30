"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Button, ButtonLine } from "..";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className={styles.nav}>
      <section>
        <Link href={'/'}>
          <Image
            src={"/comprofile.svg"}
            width={140}
            height={40}
            alt="logo"
            draggable="false"
            className={styles.img}
          />
        </Link>
      </section>
      <ul className={styles.list_container}>
        <li className={styles.items}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.items}>
          <Link href={"/vacancy"}>Job Vacancy</Link>
        </li>
        <li className={styles.items}>
          <Link href={"/upload-job"}>Upload Job</Link>
        </li>
        <li className={styles.items}>
          <Link href={"/about"}>About Us</Link>
        </li>
      </ul>
      <div className={styles.button_container}>
        <ButtonLine text={<Link href="/register">Daftar</Link>} />
        <Button text={<Link href="/login">Masuk</Link>} />
      </div>
    </div>
  );
};
