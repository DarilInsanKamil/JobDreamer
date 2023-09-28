import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import styles from './detail.module.css'

export default function DetailJob({ params }) {
  // const data = await getData(params.slug);
  return (
    // <Suspense fallback={<p>Loading....</p>}>
      <section>
        <button>
          <Link href="#">{`< kembali`}</Link>
        </button>
        <div className={styles.heading_container}>
          <div className={styles.heading}>
            <Image
              // src={data.company_image_url}
              // alt={data.title}
              src={'/career.jpg'}
              height={100}
              width={100}
            />
            <div>
              {/* <h3>{data.title}</h3> */}
              <h3>{"title pekerjaan"}</h3>
              {/* <p>{data.company_name}</p> */}
              <p>{"nama perusahaan"}</p>
            </div>
          </div>
          <div>
            <button>Lamar</button>
            <button>Share</button>
            <button>Simpan</button>
          </div>
        </div>
        <div className={styles.info_container}>
          <div>
            <h4>Job Location</h4>
            {/* <p>{data.company_city}</p> */}
            <p>{"alamat perusahaan"}</p>
          </div>
          <div>
            <h4>Job Type</h4>
            {/* <p>{data.job_type}</p> */}
            <p>{"tipe pekerjaan"}</p>
          </div>
          <div>
            <h4>Work Type</h4>
            {/* <p>{data.job_tenure}</p> */}
            <p>{"job tenure"}</p>
          </div>
          <div>
            <h4>Salary</h4>
            {/* <p>
              IDR. {data.salary_min} - {data.salary_max}
            </p> */}
            <p>
              IDR. {"10.00000"} - {"100.000.000"}
            </p>
          </div>
        </div>
        <div className={styles.DetailJob}>
          <div className={styles.desc}>
            <h3>Job Description</h3>
            {/* <p>{data.job_description}</p> */}
            <p>{"lorem ipusm color dot amrt"}</p>
          </div>
          <div className={styles.qual}>
            <h3>Job Qualification</h3>
            {/* <p>{data.job_qualification}</p> */}
            <p>{"lorem ipusm color dot amrt"}</p>
          </div>
        </div>
      </section>
    // </Suspense>
  );
}
