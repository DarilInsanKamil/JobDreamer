"use client";
import React, { useContext, useState } from "react";
import styles from "./login.module.css";
import { Button, InputType } from "@/components";
import { handleChange } from "../../utils/handleChange";
import { useRouter } from "next/navigation";
import { VacancyContext } from "../context";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { LoginSubmit } = useContext(VacancyContext);

  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();
  const handleChangeForm = (event) =>
    handleChange(event, inputData, setInputData);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    LoginSubmit(inputData, setLoading, router);
  };

  return (
    <main className={styles.container}>
      <section className={styles.sub_container}>
        <div className={styles.heading}>
          <p className={styles.title}>Login Page</p>
          <p className={styles.cpywrite}>
            Welcome back! Please enter your email address and password to login
            to your account.
          </p>
        </div>
        <form className={styles.form}>
          <div className={styles.input_container}>
            <label> Email</label>
            <InputType
              type={"email"}
              label={"Email"}
              name={"email"}
              onChange={handleChangeForm}
              value={inputData.email}
            />
          </div>
          <div className={styles.input_container}>
            <label>Password</label>
            <InputType
              type={"name"}
              name={"password"}
              label={"Password"}
              onChange={handleChangeForm}
              value={inputData.password}
            />
          </div>
          <Button
            text={loading ? "Tunggu sebentar" : "Login"}
            onClick={handleSubmitForm}
          />
        </form>
      </section>
    </main>
  );
}
