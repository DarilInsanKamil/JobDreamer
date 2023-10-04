"use client";
import React, { useContext, useState } from "react";
import { VacancyContext } from "../context";
import { Button, Card, FilterBar, LoaderSkeleton, SearchBar } from "@/components";
import { useRouter } from "next/navigation";
import { useWindowSize } from "@/utils/window_size";
import { tandaPemisahTitik } from "@/utils/convert";
import SectionResult from "./[slug]/sectionResult";
import styles from "./vacancy.module.css";

export default function Vacancy() {
  const { data, loading, page, PaginationNext, PaginationPrev, last_page } =
    useContext(VacancyContext);
  const length = data.length;
  const [query, setQuery] = useState("");
  const router = useRouter();
  const size = useWindowSize();

  const handleNext = () => {
    PaginationNext();
  };
  const handlePrev = () => {
    PaginationPrev();
  };
  const handleClick = (event) => {
    let value = event.target.value;
    router.push(`/vacancy/${value}`);
  };

  const onSearch = (e) => {
    e.preventDefault();
    const inputQuery = e.target[0].value;
    setQuery(inputQuery);
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <FilterBar />
      </div>

      <div suppressHydrationWarning className={styles.sub_container}>
        <SearchBar onSearch={onSearch} />
        <div className={styles.filtermobile}>
          <Button text={'Filter'} />
        </div>
        {query && <SectionResult query={query} setQuery={setQuery} />}
        {!query && (
          <div className={styles.card_column}>
            {loading ? <LoaderSkeleton /> : null}
            {data &&
              data.map((res, idx) => (
                <Card
                  key={idx}
                  title={res.title}
                  src={res.company_image_url}
                  alt={res.title}
                  company_name={res.company_name}
                  company_city={res.company_city}
                  job_description={res.job_description}
                  job_tenure={res.job_tenure}
                  job_type={res.job_type}
                  salary_min={res.salary_min}
                  salary_max={res.salary_max}
                  onClick={handleClick}
                  valbtn={res.id}
                />
              ))}
          </div>
        )}
        <section>
          {page > 1 ? <button onClick={handlePrev}>Prev</button> : null}
          {last_page > 1 ? <button onClick={handleNext}>Next</button> : null}
        </section>
      </div>
    </div>
  );
}
