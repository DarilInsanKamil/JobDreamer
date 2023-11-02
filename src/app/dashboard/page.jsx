"use client";
import { useRouter } from "next/navigation";
import { VacancyContext } from "../context";
import { Suspense, useContext, useState } from "react";
import styles from "./page.module.css";
import { tandaPemisahTitik } from "@/utils/convert";
import { Button, ButtonLine } from "@/components";
export default function JobDashboard() {
  const { data, DeleteJob, PaginationNext, PaginationPrev, page, EditJob } =
    useContext(VacancyContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    PaginationNext();
  };

  const handlePrev = () => {
    PaginationPrev();
  };

  const handleDelete = (event) => {
    let id = event.currentTarget.value;
    DeleteJob(id, setLoading, router);
  };
  const handleEdit = (event) => {
    let id = event.currentTarget.value;
    EditJob(id, setLoading, router);
  };

  return (
    <Suspense fallback={<p>loading...</p>}>
      <div className={styles.page_container}>
        <table className={styles.table_container}>
          <thead className={styles.table_thead}>
            <tr>
              <th>No</th>
              <th>Title Job</th>
              <th>Name Company</th>
              <th>Salary Min</th>
              <th>Salary Max</th>
              <th>Job Type</th>
              <th>Job Tenure</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((res, idx) => (
                <tr key={idx} className={styles.table_tbody}>
                  <td className={styles.td}>{idx + 1}.</td>
                  <td className={styles.td}>{res.title}</td>
                  <td className={styles.btn}>
                    <img
                      src={res.company_image_url}
                      alt={idx}
                      width={20}
                      height={20}
                      draggable="false"
                      className={styles.img}
                    />
                    {res.company_name}
                  </td>
                  <td className={styles.td}>
                    Rp. {tandaPemisahTitik(res.salary_min)}
                  </td>
                  <td className={styles.td}>
                    Rp. {tandaPemisahTitik(res.salary_max)}
                  </td>
                  <td className={styles.td}>{res.job_type}</td>
                  <td className={styles.td}>{res.job_tenure}</td>
                  <td className={styles.btn}>
                    <button
                      value={res.id}
                      onClick={handleDelete}
                      // text={"Delete"}
                    >delete</button>
                    <button
                      value={res.id}
                      onClick={handleEdit}
                    >edit</button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </Suspense>
  );
}
