"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/FormInputs/FormHeader";
// import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import TextFile from "@/components/FormInputs/TextFile";
import { makePostImageRequest } from "@/lib/apiRequest";
import ImageUpload from "@/components/backoffice/ImageUpload";
import MulImageUpload from "@/components/backoffice/MulImageUpload";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
import SelectInput from "@/components/FormInputs/SelectInput";
import SelectInputc from "@/components/FormInputs/SelectInputc";

export default function NewCategory({ initialData = {}, isUpdate = false }) {
     const [selectedFiles, setSelectedFiles] = useState([]);
     const [selectedFile, setSelectedFile] = useState([]);
     const [category, setCategory] = useState([]);

      const {
        data: categoryData,
        error: categoryError,
        isLoading: categoryLoading,
      } = useSWR(`api/v1/categories`, fetcher);
      console.log('categories', categoryData);

      useEffect(() => {setCategory(categoryData);}, [categoryData]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

 const onImagesChange = (uploadedImages) => {
   setSelectedFiles(uploadedImages);
 };

 const onImageChange = (file) => {
   setSelectedFile(file);
 };



  async function onSubmit(data) {
    const formData = new FormData();
    formData.append('product_name', data.product_name);
    formData.append("product_description", data.product_description);
    formData.append("sale_price", data.sale_price);
    formData.append("purchase_price", data.purchase_price);
    formData.append("stock", data.stock);
    formData.append("minimum_sale", data.minimum_sale);
    formData.append("unit", data.unit);
    // formData.append("status_type", data.status_type);
    formData.append("product_type", data.product_type);
    formData.append("category_id", data.category_id);

     formData.append("file", selectedFile);
     for (let i = 0; i < selectedFiles.length; i++) {
       formData.append("files", selectedFiles[i]);
     }

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
        <SelectInputc
          label="Category"
          name="category_id"
          register={register}
          options={category}
          className="sm:col-span-1"
        />
        <div className="">
          <TextInput
            label="Product Title"
            name="product_name"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Product Description"
            name="product_description"
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
           
          </div>
          <div className="mt-6">
            <ImageUpload onImageChange={onImageChange} title="Feature Image" />
            <div className="mt-4">
              <MulImageUpload
                onImagesChange={onImagesChange}
                title="Gallery Image"
              />
            </div>
          </div>
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
