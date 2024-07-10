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
export default function UpdateCategory() {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

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
    const formData = new FormData();
    formData.append("category_name", data.category_name);
    formData.append("category_description", data.category_description);
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
            <TextInput
              label="Product Title"
              name="title"
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
              <TextInput
                label="Category"
                name="category_id"
                register={register}
                errors={errors}
                defaultValue={product?.category_id?.category_name ?? ""}
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
