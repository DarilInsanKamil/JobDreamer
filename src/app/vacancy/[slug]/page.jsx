import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import styles from "./detail.module.css";
import { splitter, tandaPemisahTitik } from "@/utils/convert";
import { Button, LoaderSkeleton } from "@/components";

const getData = async (params) => {
  try {
    const res = await fetch(
      `https://dev-example.sanbercloud.com/api/job-vacancy/${params}`
    );
    return res.json();
  } catch (error) {
    console.log(JSON.stringify(error));
  }
};

export default async function DetailJob({ params }) {
  const data = await getData(params.slug);
  return (
    <Suspense fallback={<LoaderSkeleton />}>
      <button>
        <Link href="/vacancy">{`< kembali`}</Link>
      </button>
      <section className={styles.detail_container}>
        <div className={styles.heading_container}>
          <div className={styles.heading}>
            <Image
              src={data.company_image_url}
              alt={data.title}
              height={100}
              width={100}
              className={styles.img}
            />
            <div>
              <h3>{data.title}</h3>
              <p>{data.company_name}</p>
            </div>
          </div>
          <div className={styles.btn_container}>
            <Button text={"Lamar"} />
            <div className={styles.imgbtn}>
              <Image src="/share.svg" width={20} height={20} alt="icon-share" />
            </div>
            <div className={styles.imgbtn}>
              <Image
                src="/bookmar.svg"
                width={20}
                height={20}
                alt="icon-share"
              />
            </div>
          </div>
        </div>
        <div className={styles.info_container}>
          <div>
            <h4>Job Location</h4>
            <p>{data.company_city}</p>
          </div>
          <div>
            <h4>Job Type</h4>
            <p>{data.job_type}</p>
          </div>
          <div>
            <h4>Work Type</h4>
            <p>{data.job_tenure}</p>
          </div>
          <div>
            <h4>Salary</h4>
            <p>
              IDR. {tandaPemisahTitik(data.salary_min)} -{" "}
              {tandaPemisahTitik(data.salary_max)}
            </p>
          </div>
        </div>
        <div className={styles.DetailJob}>
          <div className={styles.desc}>
            <h3>Job Description</h3>
            {splitter(data.job_description).map((res, idx) => {
              return (
                <ul key={idx}>
                  <li>{res}</li>
                </ul>
              );
            })}
          </div>
          <div className={styles.qual}>
            <h3>Job Qualification</h3>
            {/* <p>{data.job_qualification}</p> */}
            {splitter(data.job_qualification).map((res, idx) => {
              return (
                <ul key={idx}>
                  <li>{res}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </section>
    </Suspense>
  );
}
