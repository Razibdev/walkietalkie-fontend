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
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("designation", data.designation);
      formData.append("description", data.description);
      formData.append("file", selectedFile);
     

        makePostImageRequest(
          setLoading,
          "api/v1/team",
          formData,
          "Team",
          reset,
          true
        );
    }


  return (
    <div>
      {/* Header */}
      <FormHeader title="New Team Member" href="/dashboard/team" />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Phone"
            name="phone"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Designation"
            name="designation"
            register={register}
            errors={errors}
          />
         
          <TextareaInput
            label="Description"
            name="description"
            register={register}
            errors={errors}
          />
        </div>
        <div className="mt-6">
          <ImageUpload onImageChange={onImageChange} title="Profile Image" />
         
        </div>
        <div className="flex justify-end">
          <SubmitButton
            isLoading={loading}
            loadingTitle="Creating Team Please Wait..."
            title="Create Team"
          />
        </div>
      </form>
    </div>
  );
}
