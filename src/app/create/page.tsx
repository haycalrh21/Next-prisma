"use client";

import React from "react";
import FormPost from "@/app/components/FormPost";
import { SubmitHandler } from "react-hook-form";
import { FormInputPost } from "@/app/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();

    const { mutate: createPost } = useMutation({
        mutationFn: (newPost: FormInputPost) => {
            return axios.post("/api/post/create", newPost);
        },
        onError: (error) => {
            console.error(error);
        },
        onSuccess: () => {
            router.push("/");
        },
    });

    const handleFormSubmit: SubmitHandler<FormInputPost> = (data) => {
        createPost(data);
    };

    return (
        <div>
            <FormPost submit={handleFormSubmit} />
        </div>
    );
};

export default Page;
