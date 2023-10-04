'use client'
import Image from "next/image";
import styles from "./card.module.css";
export const Card = ({
  src,
  title,
  alt,
  company_name,
  company_city,
  job_description,
  job_tenure,
  job_type,
  salary_min,
  salary_max,
  onClick,
  valbtn
}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.heading}>
        <img
          src={src}
          alt={alt}
          width={40}
          height={40}
          className={styles.img}
        />
        <div className={styles.headText}>
          <p className={styles.title}>{title}</p>
          <p className={styles.company_name}>{company_name}</p>
        </div>
      </div>
      <div className={styles.card_body}>
        <p className={styles.company_city}>
          <Image
            src="./location-icon.svg"
            alt="location-icon"
            width={16}
            height={16}
            className={styles.icon}
          />
          {company_city}
        </p>
        <p className={styles.salary}>
          <Image
            src="./salary.svg"
            alt="salary"
            width={16}
            height={16}
            className={styles.icon}
          />
          IDR. {salary_min} - {salary_max}
        </p>
        <p className={styles.job_description}>{job_description}</p>
      </div>
      <div className={styles.card_footer}>
        <div className={styles.tenure_type}>
          <p className={styles.job_type}>{job_type || "null"}</p>
          <p className={styles.job_tenure}>{job_tenure}</p>
        </div>
        <button onClick={onClick} value={valbtn} className={styles.btn}>See detail </button>
      </div>
    </div>
  );
};
