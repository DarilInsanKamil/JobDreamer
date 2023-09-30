import { VacancyContext } from "@/app/context";
import { Card, LoaderSkeleton } from "@/components";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import styles from "../listsection/list.module.css";

export const ListCard = () => {
  const { data, loading } = useContext(VacancyContext);
  const sliceData = data.slice(0, 3);
  const router = useRouter();

  const handleClick = (event) => {
    let value = event.target.value;
    router.push(`/vacancy/${value}`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.sub_container_small}>
        <div className={styles.card_column}>
          {loading ? <LoaderSkeleton/> : null}
          {data &&
            sliceData.map((res, idx) => (
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
      </div>
    </div>
  );
};
