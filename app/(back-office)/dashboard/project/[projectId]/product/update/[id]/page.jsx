"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/FormInputs/FormHeader";
// import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import TextFile from "@/components/FormInputs/TextFile";
import SelectInput from "@/components/FormInputs/SelectInput";
import { useParams } from "next/navigation";

export default function NewCategory({ initialData = {}, isUpdate = true }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);
  const {projectId} = useParams();
  const handleFileChange = (event) => {
    const files = event.target.files;
    const previews = [];
    const newFiles = [];

    // Iterate through selected files and create image previews
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onload = (e) => {
        previews.push(e.target.result);
        newFiles.push(file);
        if (previews.length === files.length) {
          // Once all previews are generated, update state
          setImagePreviews(previews);
          setSelectedFiles(newFiles);
        }
      };

      reader.readAsDataURL(file);
    }
  };

 

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;

  }

  const options = [
    { id: "Pcs", title: "Pcs" },
    { id: "KG", title: "KG" },
    { id: "L", title: "L" },
  ];

  const categories = [
    { id: 0, title: "Without Category" },
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
  ];

  
  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Product" : "New Product"}
        href={`/dashboard/projects/${projectId}/product`}
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />

          <TextInput
            label="Price"
            name="price"
            register={register}
            errors={errors}
          />

          <SelectInput
            label="Unit of Measurement"
            name="unit"
            register={register}
            errors={errors}
            options={options}
          />

          <TextInput
            label="Weight in grams"
            name="grams"
            register={register}
            errors={errors}
            isRequired="false"
          />

          <TextInput
            label="Length(cm)"
            name="length"
            register={register}
            errors={errors}
            isRequired="false"
          />
          <TextInput
            label="Weight(cm)"
            name="weight"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextInput
            label="Height(cm)"
            name="height"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <TextInput
            label="Purchase"
            name="purchase"
            isRequired={false}
            register={register}
            errors={errors}
          />

          <TextInput
            label="In Stock"
            name="stock"
            register={register}
            errors={errors}
            isRequired="false"
          />

          <TextFile
            label="Upload Images"
            name="images"
            register={register}
            errors={errors}
            onChange={handleFileChange}
          />

          <SelectInput
            label="Category"
            name="category"
            register={register}
            errors={errors}
            options={categories}
          />

          {/* <div>
            {imagePreviews.map((preview, index) => (
              <div
                key={index}
                style={{ display: "inline-block", marginRight: "10px" }}
              >
                <img
                  src={preview}
                  alt={`Image ${index + 1}`}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginRight: "5px",
                  }}
                />
                <button onClick={() => removeImagePreview(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div> */}
        </div>
        <SubmitButton
          isLoading={loading}
          loadingTitle="Creating Product Please Wait..."
          title={isUpdate ? "Updated Product" : "Create Product"}
        />
      </form>
    </div>
  );
}
