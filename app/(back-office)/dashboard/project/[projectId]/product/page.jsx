"use client"
import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
// import CustomProductTable from '@/components/backoffice/CustomProductTable';
import { useParams } from "next/navigation";

export default function Page() {
const {projectId} = useParams();
  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Products"
        linkTitle="Add Product"
        href={`/dashboard/projects/${projectId}/product/new`}
      />

      {/* Export || Search || Bluk Delete */}
      <TableActions />
      {/* Table */}
      <div className="mt-4">
        {/* <CustomProductTable /> */}
      </div>
    </div>
  );
}
