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
import { makePostImageRequest } from "@/lib/apiRequest";

export default function NewCategory({ initialData = {}, isUpdate = false }) {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

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

  // Function to remove an image preview and its corresponding file
  const removeImagePreview = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);

    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;

    const formData = new FormData();
    formData.append('category_name', data.title);
    formData.append('category_slug', slug);
    formData.append('category_description', data.description)
    // for (let i = 0; i < selectedFiles.length; i++) {
    //   formData.append("images[]", selectedFiles[i]);
    // }

    makePostImageRequest(
      setLoading,
      "api/v1/products",
      formData,
      "Products",
      reset,
      true
    );

  }

  //   async function onSubmit(data) {
  //     console.log(data);
  //     if (isUpdate) {
  //       // Update request
  //       makePutRequest(
  //         setLoading,
  //         `api/categories/${initialData.id}`,
  //         data,
  //         "Category",
  //         redirect,
  //         reset
  //       );
  //     } else {
  //       makePostRequest(setLoading, "api/categories", data, "Category", reset);
  //     }
  //   }
  return (
    <div>
      {/* Header */}
      <FormHeader
        title={isUpdate ? "Update Product" : "New Product"}
        href="/dashboard/inventory/products"
      />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="">
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
          <div className="grid gap-4 grid-cols-2 sm:gap-6">
            <TextInput
              label="Purchase Price"
              name="purchase_price"
              register={register}
              errors={errors}
            />
            <TextInput
              label="Sale Price"
              name="sale_price"
              register={register}
              errors={errors}
            />
          </div>
          <div className="grid gap-4 grid-cols-2 sm:gap-6">
            <TextInput
              label="Minimum Sale"
              name="minimum_sale"
              register={register}
              errors={errors}
            />
            <TextInput
              label="Stock"
              name="stock"
              register={register}
              errors={errors}
            />
          </div>
          <div className="grid gap-4 grid-cols-2 sm:gap-6">
            <TextInput
              label="Unit"
              name="unit"
              register={register}
              errors={errors}
            />
            <TextInput
              label="Category"
              name="category_id"
              register={register}
              errors={errors}
            />
          </div>
          <TextFile
            label="Feature Images"
            name="file"
            register={register}
            errors={errors}
            onChange={handleFileChange}
          />
          <TextFile
            label="Multi Images"
            name="files"
            register={register}
            errors={errors}
            onChange={handleFileChange}
          />
          <div>
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
          </div>
        </div>
        <SubmitButton
          isLoading={loading}
          loadingTitle="Creating Category Please Wait..."
          title={isUpdate ? "Updated Category" : "Create Category"}
        />
      </form>
    </div>
  );
}
