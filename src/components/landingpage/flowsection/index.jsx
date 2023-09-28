import React from 'react'
import styles from './flow.module.css';

export const FlowSection = () => {
  return (
    <section className={styles.work_container}>
        <h1 className={styles.title2}>How it works</h1>
        <p className={styles.copywrite_works}>
          Ikuti langkah-langkah mudah ini untuk meningkatkan peluang Anda mendapatkan pekerjaan
        </p>
        <div className={styles.card_container}>
          <div className={styles.card}>
            <h3>1.</h3>
            <p className={styles.work_title}>Register Account</p>
            <p className={styles.work_desc}>First, you need to make account</p>
            <a className={styles.link}>{`Register account`}</a>
          </div>
          <div className={styles.card}>
            <h3>2.</h3>
            <p className={styles.work_title}>Find Job</p>
            <p className={styles.work_desc}>Second, search your draam job</p>
            <a className={styles.link}>{`Search Job`}</a>
          </div>
          <div className={styles.card}>
            <h3>3.</h3>
            <p className={styles.work_title}>Apply Job</p>
            <p className={styles.work_desc}>Third, apply your dream job</p>
            <a className={styles.link}>{`Learn more`}</a>
          </div>
        </div>
      </section>
  )
}
