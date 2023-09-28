import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <section className={styles.list_container}>
        <h1>JobDreamer</h1>
        <p className={styles.copywrite}>
          We transform the way candidates find jobs and companies hire talent.
        </p>
      </section>
      <section className={styles.list_container}>
        <p className={styles.heading_list}>JobDreamer</p>
        <ul>
          <li>Advertise</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </section>
      <section className={styles.list_container}>
        <p className={styles.heading_list}>News</p>
        <ul>
          <li>News</li>
          <li>Top stories</li>
        </ul>
      </section>
      <section className={styles.list_container}>
        <p className={styles.heading_list}>Jobs</p>
        <ul>
          <li>For jobseeker</li>
          <li>For employers</li>
        </ul>
      </section>
      <section className={styles.list_container}>
        <p className={styles.heading_list}>Events</p>
        <ul>
          <li>PDC</li>
          <li>JB Event Calender</li>
        </ul>
      </section>
    </footer>
  );
};
