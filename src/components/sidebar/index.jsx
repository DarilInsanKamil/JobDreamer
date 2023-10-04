"use client";
import { useState } from "react";
import { InputType, Button } from "..";
import styles from "./sidebar.module.css";
import Image from "next/image";

export const FilterBar = () => {
  const [openLocation, setOpenLocation] = useState(true);
  const [openType, setOpenType] = useState(true);
  const [openExperience, setOpenExperience] = useState(true);
  const [openSalary, setOpenSalary] = useState(true);
  return (
    <section className={styles.container}>
      <h1>Filter</h1>
      <div className={styles.drop}>
        <p>Location</p>
        <button onClick={() => setOpenLocation(!openLocation)}>
          <Image className={openLocation ? styles.arrowdown : styles.arrowup} src={'/arrow.svg'} height={12} width={12} alt={'icon-arrow'}/>
        </button>
      </div>
      <div style={{ display: openLocation ? "flex" : "none",  }}>
        <InputType type={"text"} pholder={"cari lokasi..."} />
      </div>
      <div className={styles.drop}>
        <p>Tipe Pekerjaan</p>
        <button onClick={() => setOpenType(!openType)}>
        <Image className={openType ? styles.arrowdown : styles.arrowup} src={'/arrow.svg'} height={12} width={12} alt={'icon-arrow'}/>
        </button>
      </div>
      <div style={{ display: openType ? "block" : "none" }}>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Fulltime</label>
        </div>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Part-time</label>
        </div>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Intern</label>
        </div>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Freelance</label>
        </div>
      </div>
      <div className={styles.drop}>
        <p>Pengalaman</p>
        <button onClick={() => setOpenExperience(!openExperience)}>
        <Image className={openExperience ? styles.arrowdown : styles.arrowup} src={'/arrow.svg'} height={12} width={12} alt={'icon-arrow'}/>
        </button>
      </div>
      <div style={{ display: openExperience ? "block" : "none" }}>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Junior</label>
        </div>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Senior</label>
        </div>
        <div className={styles.salary}>
          <input type="checkbox" />
          <label>Expert</label>
        </div>
      </div>
      <div className={styles.drop}>
        <p>Salary</p>
        <button onClick={() => setOpenSalary(!openSalary)}>
        <Image className={openSalary ? styles.arrowdown : styles.arrowup} src={'/arrow.svg'} height={12} width={12} alt={'icon-arrow'}/>
        </button>
      </div>
      <div style={{display: openSalary ? "block" : "none", marginBottom: '12px'}} >
        <div className={styles.salary}>
          <InputType type={"number"} pholder={"salary min"} />
          <InputType type={"number"} pholder={"salary max"} />
        </div>
      </div>
      <Button text={"Filter"} />
    </section>
  );
};
