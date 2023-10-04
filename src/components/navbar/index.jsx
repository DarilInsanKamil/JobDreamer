"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Button, ButtonLine } from "..";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { VacancyContext } from "@/app/context";
import { useWindowSize } from "@/utils/window_size";

export const NavigationBar = () => {
  const size = useWindowSize();
  const [popup, setPopup] = useState(false);
  const handlePopup = () => {
    setPopup(!popup);
  };
  return (
    <>
      {size.width > 600 ? (
        <Desktop props={popup ? <PopUp /> : null} onClick={handlePopup} />
      ) : (
        <Mobile props={popup ? <PopUp /> : null} onClick={handlePopup} />
      )}
    </>
  );
};

const Desktop = ({ props, onClick }) => {
  const { token, user, Logout } = useContext(VacancyContext);
  const router = useRouter();
  const handleRouteLogin = () => {
    router.push("/login");
  };
  const handleRouteRegist = () => {
    router.push("/register");
  };
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
        <div className={styles.profile_container} onClick={onClick}>
          <img
            className={styles.img_profile}
            src={user.image}
            alt="img-profile"
          />
          <p>{user.name}</p>
        </div>
      )}
      {props}
    </nav>
  );
};

const Mobile = ({ props, onClick }) => {
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
      <Image
        src={"/menu-black.svg"}
        width={20}
        height={20}
        alt="menu"
        draggable="false"
        priority={true}
        onClick={onClick}
      />
      {props}
    </nav>
  );
};

const PopUp = () => {
  const { token, user, Logout } = useContext(VacancyContext);
  const handleRouteLogout = () => Logout(router);
  const size = useWindowSize();
  const router = useRouter();
  const handleRouteLogin = () => {
    router.push("/login");
  };
  const handleRouteRegist = () => {
    router.push("/register");
  };
  return (
    <>
      {size.width > 600 ? (
        <div className={styles.popup_container}>
          <ul className={styles.popup_list}>
            <li>
              <div className={styles.popup_list}>
                <ButtonLine text={"Change Password"} />
                <Button onClick={handleRouteLogout} text={"Logout"} />
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.popup_container}>
          <ul className={styles.popup_list}>
            <li>
              {token == "" ? (
                <div className={styles.button_container}>
                  <ButtonLine text={"Daftar"} onClick={handleRouteRegist} />
                  <Button text={"Masuk"} onClick={handleRouteLogin} />
                </div>
              ) : (
                <div className={styles.profile_container}>
                  <img
                    className={styles.img_profile}
                    src={user.image}
                    alt="img-profile"
                  />
                  <p>{user.name}</p>
                </div>
              )}
            </li>
            <Link href={"/"}>
              <li className={styles.items}>Home</li>
            </Link>
            <li className={styles.items}>
              <Link href={"/vacancy"}>Job Vacancy</Link>
            </li>
            <li className={styles.items}>
              <Link href={"/upload-job"}>Upload Job</Link>
            </li>
            <li>
              <div className={styles.popup_list}>
                <ButtonLine text={"Change Password"} />
                <Button onClick={handleRouteLogout} text={"Logout"} />
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
