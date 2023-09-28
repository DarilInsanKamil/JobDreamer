import React from "react";
import styles from "./primacy.module.css";
import Image from "next/image";

export const PrimacySection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Why you contact us</h1>
        <Image src={'/career.jpg'} width={400} height={400} alt="career" className={styles.img} draggable="false"/>
        <p className={styles.copywrite}>
          Portal job kami memiliki berbagai keunggulan yang akan membantu Anda
          menemukan pekerjaan impian Anda dengan lebih mudah dan cepat.
        </p>
      </div>
      <div className={styles.card_container}>
        <div className={styles.card}>
          <h3 className={styles.card_title}>100k</h3>
          <p className={styles.card_sub}>Jobs</p>
          <p className={styles.card_desc}>We have 100k job for you apply</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.card_title}>2k</h3>
          <p className={styles.card_sub}>Companies</p>
          <p className={styles.card_desc}>Second search your draam job</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.card_title}>300</h3>
          <p className={styles.card_sub}>Mentor</p>
          <p className={styles.card_desc}>We have 300 mentor partner for improve your career</p>
        </div>
      </div>
    </section>
  );
};
