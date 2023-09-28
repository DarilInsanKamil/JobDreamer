"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import { Button, InputType } from "@/components";
import { handleChange } from "../../utils/handleChange";
import { RegisterAuth } from "../../utils/registerAuth";

export default function RegisterPage() {
  const [inputData, setInputData] = useState({
    email: "",
    name: "",
    password: "",
    image: "",
  });

  const handleChangeForm = (event) =>
    handleChange(event, inputData, setInputData);
  const handleSubmitForm = (event) => RegisterAuth(event, inputData);

  return (
    <section className={styles.form}>
      <p>Register Account</p>
      <form>
        <div>
          <label>Email</label>
          <InputType type={"email"} />
        </div>
        <div>
          <label>name</label>
          <InputType type={"name"} />
        </div>
        <div>
          <label>Image Url</label>
          <InputType type={"text"} />
        </div>
        <div>
          <label>Password</label>
          <InputType type={"password"} />
        </div>
        <div  className={styles.btn}>
        <Button text={"Register"}/>
        </div>
      </form>
    </section>
  );
}
