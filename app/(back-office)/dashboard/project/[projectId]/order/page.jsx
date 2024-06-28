"use client"
import React from "react";
// import TableActions from "@/components/backoffice/TableActions";
// import CustomOrderDetailTable from "@/components/backoffice/CustomOrderDetailTable";
import Heading from "@/components/backoffice/Heading";
import { useParams } from "next/navigation";
// import OrderActions from "@/components/backoffice/OrderActions";


export default function OrderManagement() {
    const { projectId } = useParams();
    
  return (
    <div>
      <Heading title="Order Details" />

      {/* <TableActions /> */}
        {/* <OrderActions /> */}
      <div className="mt-4">
        {/* <CustomOrderDetailTable /> */}
      </div>
    </div>
  );
}
