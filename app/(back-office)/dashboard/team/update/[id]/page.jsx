"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/FormInputs/FormHeader";
import { makePatchImageRequest } from "@/lib/apiRequest";
import { useForm } from "react-hook-form";
import ImageUpload from "@/components/backoffice/ImageUpload";
import MulImageUpload from "@/components/backoffice/MulImageUpload";
export default function UpdateProject() {
  const { id } = useParams();
  
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  const [projects, setProjects] = useState(null);
  const endpoint = "api/v1/team/" + id; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(endpoint, true);
        setProjects(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [endpoint]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: projects,
  });

  const onImagesChange = (uploadedImages) => {
    setSelectedFiles(uploadedImages);
  };

  const onImageChange = (file) => {
    setSelectedFile(file);
  };

  async function onSubmit(data) {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("designation", data.designation);
      formData.append("description", data.description);
      formData.append("file", selectedFile);

    await makePatchImageRequest(
      setLoading,
      endpoint,
      formData,
      "Team Update",
      true
    );
  }

  return (
    <div>
      <div>
        {/* Header */}
        <FormHeader title="Update Team" href="/dashboard/team" />
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
              defaultValue={projects?.name ?? ""}
              isRequired={false}
            />
            <TextInput
              label="Email"
              name="email"
              register={register}
              errors={errors}
              defaultValue={projects?.email ?? ""}
              isRequired={false}
            />
            <TextInput
              label="Phone"
              name="phone"
              register={register}
              errors={errors}
              defaultValue={projects?.phone ?? ""}
              isRequired={false}
            />
            <TextInput
              label="Designation"
              name="designation"
              register={register}
              errors={errors}
              defaultValue={projects?.designation ?? ""}
              isRequired={false}
            />

            <TextareaInput
              label="Description"
              name="description"
              register={register}
              errors={errors}
              defaultValue={projects?.description ?? ""}
              isRequired={false}
            />

          
          </div>
          <div className="mt-6">
            <ImageUpload
              onImageChange={onImageChange}
              title="Feature Image"
              initialImagePreview={projects?.image}
            />
          </div>
          <div className="flex justify-end">
            <SubmitButton
              isLoading={loading}
              loadingTitle="Updating Team Please Wait..."
              title="Update Team"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
