"use client";
import React, { useContext, useState } from "react";
import { Button, ButtonLine, InputType, InputTypeIcon } from "@/components";
import { handleChange } from "../../utils/handleChange";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";
import { VacancyContext } from "../context";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [isDataChange, setIsDataChange] = useState(true);
  const [show, setShow] = useState(true);
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
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <main className={styles.container}>
      <form className={styles.sub_container}>
        <div className={styles.input_container}>
          <InputType
            type={"email"}
            label={"Email"}
            name={"email"}
            onChange={handleChangeForm}
            value={inputData.email}
          />
        </div>
        <div className={styles.input_container}>
          <InputTypeIcon
            name={"password"}
            label={"Password"}
            onChange={handleChangeForm}
            value={inputData.password}
            type={show ? "password" : "text"}
            icon={show ? "/eye-close.svg" : "eye.svg"}
            handleShow={handleShow}
          />
        </div>
        <Button
          text={loading ? "Tunggu sebentar" : "Masuk"}
          onClick={handleSubmitForm}
        />
        <p>atau</p>
        <div className={styles.btn}>
          <ButtonLine text={"Register"} />
        </div>
      </form>
    </main>
  );
}
