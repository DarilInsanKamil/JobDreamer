import { VacancyContext } from "@/app/context";
import { Card, DataNotFound } from "@/components";
import React, { useContext } from "react";
import styles from "../vacancy.module.css";
import { useRouter } from "next/navigation";
import { tandaPemisahTitik } from "@/utils/convert";

export default function SectionResult({ query }) {
  const { data } = useContext(VacancyContext);
  const router = useRouter();

  const handleClick = (event) => {
    let value = event.target.value;
    router.push(`/vacancy/${value}`);
  };

  const result = data.filter((a) => {
    return a.title.toLowerCase().includes(query.toLocaleLowerCase());
  });

  return (
    <div className={styles.result}>
      <div className={styles.card_column}>
        {result.length > 0 ? (
          <>
            {result.map((res, idx) => (
              <Card
                key={idx}
                title={res.title == "" ? "test" : res.title}
                src={res.company_image_url}
                alt={res.title}
                company_name={res.company_name}
                company_city={res.company_city}
                job_description={res.job_description}
                job_tenure={res.job_tenure}
                job_type={res.job_type}
                salary_min={res.salary_min}
                salary_max={res.salary_max}
                valbtn={res.id}
                onClick={handleClick}
              />
            ))}
          </>
        ) : (
          <DataNotFound />
        )}
      </div>
    </div>
  );
}
