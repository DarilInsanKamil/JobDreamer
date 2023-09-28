import Image from "next/image";
import styles from "./about.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <h1>What client says about us</h1>
      <div className={styles.sub_container}>
        <div className={styles.card_user}>
          <div className={styles.heading_user}>
            <Image src={"/career.jpg"} width={60} className={styles.images} height={60} alt="career" />
            <div>
              <p className={styles.name}>Andi</p>
              <p>Software Engineer</p>
            </div>
          </div>
          <p className={styles.ulasan}>
            Saya sangat puas dengan layanan JobDreamer. Saya berhasil menemukan
            pekerjaan impian saya sebagai software engineer di perusahaan
            teknologi besar. Saya sangat berterima kasih kepada tim rekruter
            JobDreamer yang telah membantu saya dalam proses seleksi.
          </p>
        </div>
        <div>
          <div className={styles.card_user}>
            <div className={styles.heading_user}>
              <Image
                src={"/career.jpg"}
                width={60}
                height={60}
                alt="career"
                className={styles.images}
              />
              <div>
                <p className={styles.name}>Mamang Kesbor</p>
                <p>Customer Service Representative</p>
              </div>
            </div>
            <p className={styles.ulasan}>
              JobDreamer adalah portal job yang mudah digunakan dan informatif.
              Saya dapat dengan mudah menemukan lowongan kerja yang sesuai
              dengan lokasi dan kualifikasi saya. Saya juga dapat membaca
              informasi tentang perusahaan dan posisi yang saya lamar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
