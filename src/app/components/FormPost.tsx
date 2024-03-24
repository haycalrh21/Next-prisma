"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputPost } from "@/app/types";
import { FC } from "react";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
}

const FormPost: FC<FormPostProps> = ({ submit }) => {
  const { register, handleSubmit } = useForm<FormInputPost>();

  return (
    <div className="bg-blue-950" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <div className="card w-96 bg-black shadow-xl p-4 rounded-lg">
        <p style={{ textAlign: "center" }}>Isinya jangan bahasa kasar ya bang</p>

        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center">
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Isi aja"
            className="input input-bordered input-secondary w-full max-w-xs text-red-950 mb-4"
          />
          <input type="submit" value="Submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" />
        </form>
      </div>
    </div>
  );
};

export default FormPost;