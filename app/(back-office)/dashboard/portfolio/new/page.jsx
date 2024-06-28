"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/FormInputs/FormHeader";
// import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostImageRequest } from "@/lib/apiRequest";
import ImageUpload from "@/components/backoffice/ImageUpload";
import MulImageUpload from "@/components/backoffice/MulImageUpload";

export default function NewProject({ initialData = {} }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
   const [selectedFiles, setSelectedFiles] = useState([]);
   const [selectedFile, setSelectedFile] = useState([]);

  const onImagesChange = (uploadedImages) => {
    setSelectedFiles(uploadedImages);
  };


  const onImageChange = (file) =>{
    setSelectedFile(file);
  }

    async function onSubmit(data) {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("pre_text", data.pre_text);
      formData.append("file", selectedFile);
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("files", selectedFiles[i]);
      }

        makePostImageRequest(
          setLoading,
          "api/v1/portfolio",
          formData,
          "Portfolio",
          reset,
          true
        );
    }


  return (
    <div>
      {/* Header */}
      <FormHeader title="New Portfolio" href="/dashboard/portfolio" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Description"
            name="description"
            register={register}
            errors={errors}
          />
          
          <TextareaInput
            label="Full Description"
            name="pre_text"
            register={register}
            errors={errors}
          />

        </div>
        <div className="mt-6">
          <ImageUpload onImageChange={onImageChange} title="Feature Image" />
          <div className="mt-4">
            <MulImageUpload onImagesChange={onImagesChange} title="Gallery Image" />
          </div>
        </div>
        <div className="flex justify-end">
          <SubmitButton
            isLoading={loading}
            loadingTitle="Creating Portfolio Please Wait..."
            title="Create Portfolio"
          />
        </div>
      </form>
    </div>
  );
}
