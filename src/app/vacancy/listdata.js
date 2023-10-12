"use client";
import React, { useContext, useState } from "react";
import { VacancyContext } from "../context";
import {
    Button,
    ButtonLine,
    Card,
    LoaderSkeleton,
    SearchBar,
} from "@/components";
import { useRouter } from "next/navigation";
import SectionResult from "./[slug]/sectionResult";
import styles from "./vacancy.module.css";

export default function Vacancy() {
    const { data, loading, page, PaginationNext, PaginationPrev, last_page } =
        useContext(VacancyContext);
    const [query, setQuery] = useState("");
    const router = useRouter();

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
        <div>
            <SearchBar onSearch={onSearch}/>
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
            <section className={styles.pagination_container}>
                {page > 1 ? (
                    <ButtonLine onClick={handlePrev} text={"Previous"} />
                ) : null}
                {last_page > 1 && page < last_page ? (
                    <Button onClick={handleNext} text={"Next"} />
                ) : null}
            </section>
        </div>
    );
}
