"use client";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import FormHeader from "@/components/FormInputs/FormHeader";
// import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import SelectInput from "@/components/FormInputs/SelectInput";
import { useParams } from "next/navigation";
import SelectInputu from "@/components/FormInputs/SelectInputu";

export default function OrderConfirm({ initialData = {} }) {
    const {projectId} = useParams();
  
    const options = [
      { id: "processing", title: "Processing" },
      { id: "accept", title: "Accept" },
      { id: "cancelled", title: "Cancelled" },
      { id: "return", title: "Return" },
      { id: "double", title: "Double" },
      { id: "span", title: "Span/Error" },
    ];

    const operators = [
      { id: 1, title: "Razib Hossen" },
      { id: 2, title: "Redio Hossen" },
      { id: 3, title: "Ratul" },
      
    ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("slug", slug);
    formData.append("description", data.description);
  
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
        title="Update Order"
        href={`/dashboard/projects/${projectId}/order`}
      />
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-700 dark:border-slate-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Full Name"
            name="name"
            register={register}
            errors={errors}
            className=""
          />

          <TextInput
            label="Phone"
            name="phone"
            register={register}
            errors={errors}
            className=""
          />

          <TextInput
            label="Email"
            name="email"
            register={register}
            errors={errors}
            className=""
          />

          <TextInput
            label="Address"
            name="address"
            register={register}
            errors={errors}
            className=""
          />

          <TextareaInput
            label="Comment"
            name="comment"
            register={register}
            errors={errors}
          />

          <SelectInputu
            label="Status"
            name="status"
            register={register}
            errors={errors}
            options={options}
            className=""
          />
          <SelectInputu
            label="Operator"
            name="operator"
            register={register}
            errors={errors}
            options={operators}
            className=""
          />
        </div>
        <div className="flex justify-end">
          <SubmitButton
            isLoading={loading}
            loadingTitle="Save Changing Please Wait..."
            title="Save Changes"
          />
        </div>
      </form>
    </div>
  );
}
