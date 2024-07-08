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
export default function UpdateSlider() {
  const { id } = useParams();
  
  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);

  const [Slider, setSlider] = useState(null);
  const endpoint = "api/v1/sliders/" + id; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(endpoint, true);
        setSlider(data.data);
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
    defaultValues: Slider,
  });

  const onImagesChange = (uploadedImages) => {
    setSelectedFiles(uploadedImages);
  };

  const onImageChange = (file) => {
    setSelectedFile(file);
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("Slider_name", data.Slider_name);
    formData.append("file", selectedFile);

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    await makePatchImageRequest(
      setLoading,
      endpoint,
      formData,
      "Slider Update",
      true
    );
  }

  return (
    <div>
      <div>
        {/* Header */}
        <FormHeader title="New Slider" href="/dashboard/Slider" />
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <TextInput
              label="Slider Name"
              name="Slider_name"
              register={register}
              errors={errors}
              defaultValue={Slider?.Slider_name ?? ""}
              isRequired={false}
            />
          </div>
          <div className="mt-6">
            <ImageUpload
              onImageChange={onImageChange}
              title="Feature Image"
              initialImagePreview={Slider?.image_url}
            />
            <div className="mt-4">
              <MulImageUpload
                onImagesChange={onImagesChange}
                title="Gallery Image"
                initialImagePreview={Slider?.group_image}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <SubmitButton
              isLoading={loading}
              loadingTitle="Updating Slider Please Wait..."
              title="Update Slider"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
