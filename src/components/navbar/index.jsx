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
  const { user, token, Logout } = useContext(VacancyContext);
  const [popNav, setPopNav] = useState(false);
  const size = useWindowSize();
  const router = useRouter();
  const [popProfile, setPopProfile] = useState(false);
  const handlePopNav = () => {
    setPopNav(!popNav);
    setPopProfile(false);
  };
  const handlePopProfile = () => {
    setPopProfile(!popProfile);
    setPopNav(false);
  };
  const handleLogout = () => {
    Logout(router, setPopNav);
    setPopProfile(false);
    setPopNav(false);
  };
  const handleRouteHome = () => {
    router.push("/");
    setPopProfile(false);
    setPopNav(false);
  };
  const handleRouteVacancy = () => {
    router.push("/vacancy");
    setPopProfile(false);
    setPopNav(false);
  };
  const handleRouteUpload = () => {
    router.push("/upload-job");
    setPopProfile(false);
    setPopNav(false);
  };
  const handleRouteAbout = () => {
    router.push("/about");
    setPopProfile(false);
    setPopNav(false);
  };
  return (
    <nav>
      {size.width > 600 ? (
        <Desktop
          user={user}
          token={token}
          handlePopProfile={handlePopProfile}
          popProfile={popProfile}
          handleLogout={handleLogout}
          handleRouteHome={handleRouteHome}
          handleRouteVacancy={handleRouteVacancy}
          handleRouteUpload={handleRouteUpload}
          handleRouteAbout={handleRouteAbout}
        />
      ) : (
        <Mobile
          user={user}
          popNav={popNav}
          handlePopNav={handlePopNav}
          handlePopProfile={handlePopProfile}
          popProfile={popProfile}
          token={token}
          handleRouteHome={handleRouteHome}
          handleRouteVacancy={handleRouteVacancy}
          handleRouteUpload={handleRouteUpload}
          handleRouteAbout={handleRouteAbout}
        />
      )}
    </nav>
  );
};

const Mobile = ({
  user,
  popNav,
  handlePopNav,
  popProfile,
  handlePopProfile,
  handleRouteHome,
  handleRouteVacancy,
  handleRouteUpload,
  handleRouteAbout,
  token,
}) => {
  return (
    <section className={styles.mobile_nav}>
      {/* Navigation POPUP */}
      <div>
        <Image
          src={"/menu-black.svg"}
          width={20}
          height={20}
          alt="icon-menu"
          onClick={handlePopNav}
        />
        <Image
          src={"/comprofile.svg"}
          width={160}
          height={20}
          alt="icon-company"
        />
        {popNav ? (
          <div className={styles.profile_container}>
            <div className={styles.profile_subcontainer}>
              <p className={styles.items} onClick={handleRouteHome}>
                Home
              </p>
              <p className={styles.items} onClick={handleRouteVacancy}>
                Job Vacancy
              </p>
              {token !== "" ? (
                <p className={styles.items} onClick={handleRouteUpload}>
                  Upload Job
                </p>
              ) : null}
              <p className={styles.items} onClick={handleRouteAbout}>
                About
              </p>
            </div>
          </div>
        ) : null}
      </div>

      {/* Profile POPUP */}
      <div>
        <div>
          {token !== "" ? (
            <Image
              src={user.image}
              width={40}
              height={40}
              alt="icon-company"
              className={styles.img_profile}
              onClick={handlePopProfile}
            />
          ) : (
            <Button text={"Daftar"} />
          )}
        </div>
        {popProfile ? (
          <div className={styles.profile_container}>
            <div className={styles.profile_subcontainer}>
              <div className={styles.profile}>
                <Image
                  src={user.image}
                  width={60}
                  height={60}
                  alt="icon-company"
                  className={styles.img_profile}
                />
                <p>{user.name}</p>
              </div>
              <div className={styles.btn_container}>
                <Link href={"/dashboard"}>Dashboard</Link>
                <p className={styles.line}></p>
                <Link href={"/change-password"}>Change Password</Link>
                <Link href={"#"}>Logout</Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

const Desktop = ({
  user,
  token,
  handlePopProfile,
  popProfile,
  handleLogout,
  handleRouteHome,
  handleRouteVacancy,
  handleRouteUpload,
  handleRouteAbout,
}) => {
  return (
    <section className={styles.desktop_container}>
      <Image
        src={"/comprofile.svg"}
        width={140}
        height={20}
        alt="icon-company"
      />
      <ul className={styles.desktop_navigation}>
        <li onClick={handleRouteHome}>Home</li>
        <li onClick={handleRouteVacancy}>Job Vacancy</li>
        {token !== "" ? (
          <p className={styles.items} onClick={handleRouteUpload}>
            Upload Job
          </p>
        ) : null}
        <li onClick={handleRouteAbout}>About</li>
      </ul>
      <div>
        {token !== "" ? (
          <Image
            src={user.image}
            width={40}
            height={40}
            alt="icon-company"
            className={styles.img_profile}
            onClick={handlePopProfile}
          />
        ) : (
          <Button text={"Daftar"} />
        )}
      </div>
      {popProfile ? (
        <div className={styles.profile_container_desktop}>
          <div className={styles.profile_subcontainer_desktop}>
            <div className={styles.profile}>
              <Image
                src={user.image}
                width={60}
                height={60}
                alt="icon-company"
                className={styles.img_profile}
              />
              <p>{user.name}</p>
            </div>
            <div className={styles.btn_container}>
              <Link href={"/dashboard"}>Dashboard</Link>
              <p className={styles.line}></p>
              <Link href={"/change-password"}>Change Password</Link>
              <Button text={"Logout"} onClick={handleLogout} />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
