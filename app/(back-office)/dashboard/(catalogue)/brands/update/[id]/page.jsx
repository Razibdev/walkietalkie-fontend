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
export default function UpdateBrand() {
  const { id } = useParams();
  
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  const [brands, setBrands] = useState(null);
  const endpoint = "api/v1/brands/" + id; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(endpoint, true);
        setBrands(data.data);
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
    defaultValues: brands,
  });

  const onImagesChange = (uploadedImages) => {
    setSelectedFiles(uploadedImages);
  };

  const onImageChange = (file) => {
    setSelectedFile(file);
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("brand_name", data.brand_name);
    formData.append("file", selectedFile);

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    await makePatchImageRequest(
      setLoading,
      endpoint,
      formData,
      "Brand Update",
      true
    );
  }

  return (
    <div>
      <div>
        {/* Header */}
        <FormHeader title="New Brand" href="/dashboard/brand" />
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Brand Name"
              name="brand_name"
              register={register}
              errors={errors}
              defaultValue={brands?.brand_name ?? ""}
              isRequired={false}
            />
          </div>
          <div className="mt-6">
            <ImageUpload
              onImageChange={onImageChange}
              title="Feature Image"
              initialImagePreview={brands?.image_url}
            />
            
          </div>
          <div className="flex justify-end">
            <SubmitButton
              isLoading={loading}
              loadingTitle="Updating Brand Please Wait..."
              title="Update Brand"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
