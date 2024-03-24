"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputPost } from "@/app/types";
import { FC } from "react";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
}

// Perbaikan: Menggunakan FormPostProps sebagai tipe props
const FormPost: FC<FormPostProps> = ({ submit }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register("name", { required: true })}
        placeholder="Type here"
        className="input input-bordered input-secondary w-full max-w-xs text-red-950"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FormPost;
