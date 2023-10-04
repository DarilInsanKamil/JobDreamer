"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Button, ButtonLine } from "..";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { VacancyContext } from "@/app/context";
import { useWindowSize } from "@/utils/window_size";

export const NavigationBar = () => {
  const size = useWindowSize();
  return <>{size.width > 600 ? <Desktop /> : <Mobile />}</>;
};

const Desktop = () => {
  const { token, user, Logout } = useContext(VacancyContext);
  const router = useRouter();
  console.log(user);
  const handleRouteLogin = () => {
    router.push("/login");
  };
  const handleRouteRegist = () => {
    router.push("/register");
  };
  const handleRouteLogout = () => Logout(router);
  return (
    <nav className={styles.nav}>
      <section>
        <Link href={"/"}>
          <Image
            src={"/comprofile.svg"}
            width={140}
            height={40}
            alt="logo"
            draggable="false"
            priority={true}
            className={styles.img}
          />
        </Link>
      </section>
      <ul className={styles.list_container}>
        <Link href={"/"}>
          <li className={styles.items}>Home</li>
        </Link>
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
      {token == "" ? (
        <div className={styles.button_container}>
          <ButtonLine text={"Daftar"} onClick={handleRouteRegist} />
          <Button text={"Masuk"} onClick={handleRouteLogin} />
        </div>
      ) : (
        <div className={styles.profile_container} onClick={handleRouteLogout}>
          <img
            className={styles.img_profile}
            src={user.image}
            alt="img-profile"
          />
          <p>{user.name}</p>
        </div>
      )}
    </nav>
  );
};

const Mobile = () => {
  const { token, user, Logout } = useContext(VacancyContext);
  const handleRouteLogout = () => Logout(router);
  return (
    <nav className={styles.nav}>
      <section>
        <Link href={"/"}>
          <Image
            src={"/comprofile.svg"}
            width={140}
            height={40}
            alt="logo"
            draggable="false"
            priority={true}
            className={styles.img}
          />
        </Link>
      </section>
      {token == "" ? (
        <Image
          src={"/menu-black.svg"}
          width={20}
          height={20}
          alt="menu"
          draggable="false"
          priority={true}
          // className={styles.img}
        />
      ) : (
        <div className={styles.profile_container} onClick={handleRouteLogout}>
          <img
            className={styles.img_profile}
            src={user.image}
            alt="img-profile"
          />
          <p>{user.name}</p>
        </div>
      )}
    </nav>
  );
};
