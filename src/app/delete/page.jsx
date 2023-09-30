"use client";
import React, { useContext, useState } from "react";
import { VacancyContext } from "../context";
import { useRouter } from "next/navigation";

export default function JobDashboard() {
  const { data, DeleteJob, PaginationNext, PaginationPrev, page } = useContext(VacancyContext);
  const [loading, setLoading] = useState();
  const router = useRouter();

  const handleNext = () => {
    PaginationNext();
  };
  const handlePrev = () => {
    PaginationPrev();
  };

  const handleDelete = (e) => {
    let id = parseInt(e.target.value);
    DeleteJob(id, setLoading, router);
  };
  return (
    <>
      <p>hello world</p>
      {loading ? (
        <p>tunggu sebentar..</p>
      ) : (
        <>
          {data &&
            data.map((res, idx) => {
              return (
                <div key={idx}>
                  <img
                    src={res.company_image_url}
                    alt={res.title}
                    width={100}
                    height={100}
                  />
                  <p>{res.title}</p>
                  <p>{res.company_name}</p>
                  <button onClick={handleDelete} value={res.id}>
                    delete
                  </button>
                </div>
              );
            })}
        </>
      )}
      <section>
        {page > 1 ? <button onClick={handlePrev}>Prev</button> : null}
        <button onClick={handleNext}>Next</button>
      </section>
    </>
  );
}
