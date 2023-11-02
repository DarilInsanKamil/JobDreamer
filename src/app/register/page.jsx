"use client";
import React, { useState } from "react";
import styles from "./register.module.css";
import { Button, ButtonLine, InputType, InputTypeIcon } from "@/components";
import { handleChange } from "../../utils/handleChange";
import { RegisterAuth } from "../../utils/registerAuth";
import Image from "next/image";

export default function RegisterPage() {
  const [inputData, setInputData] = useState({
    email: "",
    name: "",
    password: "",
    image: "",
  });
  const [show, setShow] = useState(true);
  const handleChangeForm = (event) =>
    handleChange(event, inputData, setInputData);

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/register`,
        {
          name: inputData.name,
          email: inputData.email,
          image_url: inputData.image,
          password: inputData.password,
        }
      );
      console.log(`'Berhasil': ${res.data}`);
    } catch (err) {
      console.log(JSON.stringify(err));
    }
  };

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <section className={styles.container}>
      <form className={styles.sub_container}>
        <div className={styles.heading}>
          <p className={styles.title}>Register Page</p>
          <p className={styles.cpywrite}>
            Welcome back! Please enter your email address and password to login
            to your account.
          </p>
        </div>
        <Image
          src={inputData.image == "" ? "/not-found.jpg" : inputData.image}
          width={100}
          height={100}
          className={styles.img}
        />
        <InputType
          type={"text"}
          label={"Image_Url"}
          name={"image"}
          onChange={handleChangeForm}
          value={inputData.image}
        />
        <InputType
          type={"email"}
          label={"Email"}
          name={"email"}
          onChange={handleChangeForm}
          value={inputData.email}
        />
        <InputType
          type={"name"}
          label={"Name"}
          name={"name"}
          onChange={handleChangeForm}
          value={inputData.name}
        />
        <InputTypeIcon
          label={"Password"}
          name={"password"}
          onChange={handleChangeForm}
          value={inputData.password}
          type={show ? "password" : "text"}
          icon={show ? "/eye-close.svg" : "eye.svg"}
          handleShow={handleShow}
        />
        <div className={styles.btn}>
          <Button text={"Register"} onClick={handleSubmitForm} />
        </div>
        <p>atau</p>
        <div className={styles.btn}>
          <ButtonLine text={"Masuk"} />
        </div>
      </form>
    </section>
  );
}
