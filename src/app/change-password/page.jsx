'use client'
import { Button, InputType } from "@/components";
import React, { useContext, useState } from "react";
import { VacancyContext } from "../context";
import { handleChange } from "@/utils/handleChange";
import { useRouter } from "next/navigation";

export default function ChangePassword() {
  const [inputData, setInputData] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });
  const router = useRouter();
  const { ChangePassword } = useContext(VacancyContext);
  const handleChangePassword = (event) =>
    handleChange(event, inputData, setInputData);

  const ChangePasswordSubmit = (event) => {
    event.preventDefault();
    ChangePassword(inputData, setInputData, router);
  };

  return (
    <form onSubmit={ChangePasswordSubmit}>
      <div>
        <label>Current password</label>
        <InputType
          type={"text"}
          onChange={handleChangePassword}
          value={inputData.current_password}
          name={"current_password"}
        />
      </div>
      <div>
        <label>New password</label>
        <InputType
          type={"text"}
          onChange={handleChangePassword}
          value={inputData.new_password}
          name={"new_password"}
        />
      </div>
      <div>
        <label>Confirm new password</label>
        <InputType
          type={"text"}
          onChange={handleChangePassword}
          value={inputData.new_confirm_password}
          name={"new_confirm_password"}
        />
      </div>
      <Button type={"submit"} text={"change password"} />
    </form>
  );
}
