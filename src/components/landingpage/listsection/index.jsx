import React from "react";
import styles from "./list.module.css";
import { ListCard } from "..";

export const ListSection = () => {
  return (
    <section className={styles.listJob_container}>
      <div className={styles.heading}>
        <h1 className={styles.title2}>Find your dream job</h1>
        <p className={styles.copywrite_works}>
          Daftar lowongan kerja terlengkap dan terbaru dari berbagai perusahaan
          di Indonesia
        </p>
      </div>
      <ListCard />
    </section>
  );
};
