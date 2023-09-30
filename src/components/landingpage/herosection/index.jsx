"use client";

import React from "react";
import styles from "./hero.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const HeroSection = () => {
  const router = useRouter();
  return (
    <section className={styles.hero_container}>
      <div>
        <Image
          src={"/hero2.png"}
          width={500}
          height={500}
          draggable="false"
          alt="hero"
          className={styles.image_hero1}
          priority={true}
        />
      </div>
      <div className={styles.left_hero}>
        <h1 className={styles.title}>Find your dream job easily.</h1>
        <p className={styles.copywrite}>
          Kami memiliki tim rekruter profesional yang akan membantu Anda untuk
          menemukan pekerjaan yang sesuai dengan kualifikasi dan minat Anda.
        </p>
        <button onClick={() => router.push("/vacancy")} className={styles.btn}>
          Get Started
        </button>
      </div>
      <div >
        <Image
          src={"/hero2.png"}
          width={500}
          height={500}
          draggable="false"
          alt="hero"
          className={styles.image_hero2}
        />
      </div>
    </section>
  );
};
