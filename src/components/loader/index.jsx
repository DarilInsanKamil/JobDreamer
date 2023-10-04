import Image from "next/image";
import styles from "./loader.module.css";
import { Button } from "..";
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

export const LoadingDetail = () => {
  return (
    <section className={styles.detail_container}>
      <div className={styles.heading_container}>
        <div className={styles.heading}>
          <p className={styles.skeleton_img}></p>
          <div>
            <h3 className={styles.skeleton_text}></h3>
            <p className={styles.skeleton_text}></p>
          </div>
        </div>
        <div className={styles.btn_container}>
          <Button text={"Lamar"} />
          <div className={styles.imgbtn}>
            <Image src="/share.svg" width={20} height={20} alt="icon-share" />
          </div>
          <div className={styles.imgbtn}>
            <Image src="/bookmar.svg" width={20} height={20} alt="icon-share" />
          </div>
        </div>
      </div>
      <div className={styles.info_container}>
        <div>
          <h4>Job Location</h4>
          <p className={styles.skeleton_text}></p>
        </div>
        <div>
          <h4>Job Type</h4>
          <p className={styles.skeleton_text}></p>
        </div>
        <div>
          <h4>Work Type</h4>
          <p className={styles.skeleton_text}></p>
        </div>
        <div>
          <h4>Salary</h4>
          <p className={styles.skeleton_text}></p>
        </div>
      </div>
      <div className={styles.DetailJob}>
        <div className={styles.desc}>
          <h3>Job Description</h3>
          <p className={styles.skeleton_desc}></p>
        </div>
        <div className={styles.qual}>
          <h3>Job Qualification</h3>
          <p className={styles.skeleton_desc}></p>
        </div>
      </div>
    </section>
  );
};
