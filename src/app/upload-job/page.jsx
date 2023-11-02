"use client";
import { Button, InputType, Select, TextArea } from "@/components";
import { useContext, useState } from "react";
import { handleChange } from "../../utils/handleChange";
import styles from "./upload.module.css";
import Image from "next/image";
import { Datajobtype, Datajobtenure } from "../../utils/dataselect";
import { VacancyContext } from "../context";
import { useRouter } from "next/navigation";
export default function UploadJobPage() {
  const { JobSubmit } = useContext(VacancyContext);
  const [loading, setLoading] = useState(false);
  const [inputData, setInputData] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  const router = useRouter();
  const handleSubmitJob = (event) => {
    event.preventDefault();
    JobSubmit(router, inputData, setInputData, setLoading);
  };
  const handleChangeForm = (event) =>
    handleChange(event, inputData, setInputData);

  console.log(inputData.job_tenure);
  console.log(inputData.job_type);
  return (
    <main className={styles.container}>
      <form className={styles.form_container} onSubmit={handleSubmitJob}>
        <h1 className={styles.title}>Upload Job</h1>
        <InputType
          type={"text"}
          name={"title"}
          label={"Nama Pekerjaan"}
          pholder={"contoh: Project Manager"}
          onChange={handleChangeForm}
          required
        />
        <div className={styles.image_company_container}>
          <Image
            src={inputData.company_image_url || "./comprofile.svg"}
            priority={true}
            alt="image_company"
            width={100}
            height={100}
            className={styles.img}
          />
          <InputType
            type={"text"}
            name={"company_image_url"}
            label={"Logo Perusahaan"}
            onChange={handleChangeForm}
            pholder={"contoh: https://img-url"}
            required
          />
        </div>
        <div className={styles.items}>
          <div className={styles.left_item}>
            <InputType
              type={"text"}
              name={"company_name"}
              label={"Nama Perusahaan"}
              onChange={handleChangeForm}
              pholder={"contoh: Allianz"}
              required
            />
          </div>

          <div className={styles.right_item}>
            <InputType
              type={"text"}
              name={"company_city"}
              label={"Lokasi Peruhsaan"}
              onChange={handleChangeForm}
              pholder={"Jl. Kemanggisan"}
              required
            />
          </div>
          <div className={styles.left_item}>
            <Select
              data={Datajobtype}
              label={"Job Type"}
              name={"job_type"}
              onChange={handleChangeForm}
            />
          </div>
          <div className={styles.right_item}>
            <Select
              data={Datajobtenure}
              label={"Job Tenure"}
              name={"job_tenure"}
              onChange={handleChangeForm}
            />
          </div>
          <div className={styles.left_item}>
            <InputType
              type={"number"}
              name={"salary_min"}
              label={"Upah Minimal"}
              pholder={"contoh: Rp. 1.000.000"}
              onChange={handleChangeForm}
              required
            />
          </div>
          <div className={styles.right_item}>
            <InputType
              type={"number"}
              name={"salary_max"}
              label={"Upah Maksimum"}
              pholder={"contoh: Rp. 10.000.000"}
              onChange={handleChangeForm}
              required
            />
          </div>
          <div className={styles.left_item}>
            <TextArea
              label={"Job Descritpion"}
              cols={"40"}
              rows={5}
              onChange={handleChangeForm}
              name={"job_description"}
            />
          </div>
          <div className={styles.right_item}>
            <TextArea
              label={"Job Qualification"}
              cols={"40"}
              rows={5}
              onChange={handleChangeForm}
              name={"job_qualification"}
            />
          </div>
        </div>
        <Button text={"Upload Job"} type={"submit"} />
      </form>
    </main>
  );
}
