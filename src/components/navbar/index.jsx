"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import { Button, ButtonLine } from "..";
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
  const handleRouteChange = () => {
    router.push("/change-password");
    setPopProfile(false);
    setPopNav(false);
  };
  const handleRouteDashboard = () => {
    router.push("/dashboard");
    setPopProfile(false);
    setPopNav(false);
  };
  const handleRouteRegist = () => {
    router.push("/register");
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
          handleRouteChange={handleRouteChange}
          handleRouteDashboard={handleRouteDashboard}
          handleRouteRegist={handleRouteRegist}
        />
      ) : (
        <Mobile
          user={user}
          popNav={popNav}
          token={token}
          handlePopNav={handlePopNav}
          handlePopProfile={handlePopProfile}
          popProfile={popProfile}
          handleRouteHome={handleRouteHome}
          handleLogout={handleLogout}
          handleRouteVacancy={handleRouteVacancy}
          handleRouteUpload={handleRouteUpload}
          handleRouteAbout={handleRouteAbout}
          handleRouteChange={handleRouteChange}
          handleRouteDashboard={handleRouteDashboard}
          handleRouteRegist={handleRouteRegist}
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
  handleRouteDashboard,
  handleRouteChange,
  handleRouteRegist,
  handleLogout,
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
              width={36}
              height={36}
              alt="icon-company"
              className={styles.img_profile}
              onClick={handlePopProfile}
            />
          ) : (
            <Button text={"Daftar"} onClick={handleRouteRegist} />
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
                <p className={styles.line}></p>
                <p onClick={handleRouteDashboard}>Dashboard</p>
                <p onClick={handleRouteChange}>Change Password</p>
                <p className={styles.line}></p>
                <Button text={"Logout"} onClick={handleLogout} />
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
  handleRouteChange,
  handleRouteDashboard,
  handleRouteRegist,
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
          <li className={styles.items} onClick={handleRouteUpload}>
            Upload Job
          </li>
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
          <Button text={"Daftar"} onClick={handleRouteRegist} />
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
              <p className={styles.line}></p>
              <p onClick={handleRouteDashboard}>Dashboard</p>
              <p onClick={handleRouteChange}>Change Password</p>
              <p className={styles.line}></p>
              <Button text={"Logout"} onClick={handleLogout} />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};
