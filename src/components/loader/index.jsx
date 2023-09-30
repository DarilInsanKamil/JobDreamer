import Image from "next/image";
import styles from "./loader.module.css";
const dummy = [1, 2, 3];
export const LoaderSkeleton = () => {
  return (
    <>
      {dummy.map((res, idx) => {
        return (
          <div key={idx} className={styles.skeleton}>
            <p className={styles.skeleton_img}></p>
            <p className={styles.skeleton_text}></p>
            <p className={styles.skeleton_text}></p>
            <p className={styles.skeleton_desc}></p>
            <div className={styles.container}>
              <section className={styles.container}>
                <p className={styles.skeleton_btn}></p>
                <p className={styles.skeleton_btn}></p>
              </section>
              <p className={styles.skeleton_btn}></p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export const DataNotFound = () => {
  return (
    <div className={styles.notfound_container}>
      <Image
        src="/not-found.jpg"
        alt="notfound"
        width={200}
        height={200}
        draggable="false"
        priority="true"
      />
      <p>Data tidak ditemukan</p>
    </div>
  );
};
