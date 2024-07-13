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
import TextFile from "@/components/FormInputs/TextFile";
import MulImageUpload from "@/components/backoffice/MulImageUpload";
import SelectInputc from "@/components/FormInputs/SelectInputc";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";
export default function UpdateCategory() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [category, setCategory] = useState([]);

  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useSWR(`api/v1/categories`, fetcher);
  console.log("categories", categoryData);

  useEffect(() => {
    setCategory(categoryData);
  }, [categoryData]);

  const [product, setProduct] = useState(null);
  const endpoint = "api/v1/products/" + id; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(endpoint, true);
        setProduct(data.data);
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
    defaultValues: product,
  });

  const onImagesChange = (uploadedImages) => {
    setSelectedFiles(uploadedImages);
  };

  const onImageChange = (file) => {
    setSelectedFile(file);
  };

  async function onSubmit(data) {
    const formData = new FormData();
    formData.append("product_name", data.product_name);
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

    await makePatchImageRequest(
      setLoading,
      endpoint,
      formData,
      "Product Update",
      true
    );
  }

  return (
    <div>
      <div>
        {/* Header */}
        <FormHeader title="New Category" href="/dashboard/category" />
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
        >
          <div className="">
            <SelectInputc
              label="Category"
              name="category_id"
              register={register}
              options={category}
              className="sm:col-span-1"
            />
            <TextInput
              label="Product Name"
              name="product_name"
              register={register}
              errors={errors}
              defaultValue={product?.product_name ?? ""}
            />
            <TextareaInput
              label="Product Description"
              name="product_description"
              register={register}
              errors={errors}
              defaultValue={product?.product_description ?? ""}
            />
            <div className="grid gap-4 grid-cols-2 sm:gap-6">
              <TextInput
                label="Purchase Price"
                name="purchase_price"
                register={register}
                errors={errors}
                defaultValue={product?.purchase_price ?? ""}
              />
              <TextInput
                label="Sale Price"
                name="sale_price"
                register={register}
                errors={errors}
                defaultValue={product?.sale_price ?? ""}
              />
            </div>
            <div className="grid gap-4 grid-cols-2 sm:gap-6">
              <TextInput
                label="Minimum Sale"
                name="minimum_sale"
                register={register}
                errors={errors}
                defaultValue={product?.minimum_sale ?? ""}
              />
              <TextInput
                label="Stock"
                name="stock"
                register={register}
                errors={errors}
                defaultValue={product?.stock ?? ""}
              />
            </div>
            <div className="grid gap-4 grid-cols-2 sm:gap-6">
              <TextInput
                label="Unit"
                name="unit"
                register={register}
                errors={errors}
                defaultValue={product?.unit ?? ""}
              />
            </div>
            <div className="mt-6">
              <ImageUpload
                onImageChange={onImageChange}
                title="Feature Image"
              />
              <div className="mt-4">
                <MulImageUpload
                  onImagesChange={onImagesChange}
                  title="Gallery Image"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <SubmitButton
              isLoading={loading}
              loadingTitle="Updating Category Please Wait..."
              title="Update Category"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
