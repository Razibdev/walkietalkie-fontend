"use client";
import React, { useState, useEffect } from "react";
import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import Link from "next/link";
import { getDataPaginate } from "@/lib/getData";
import Pagination from "@/components/backoffice/Pagination";
import ImageFile from "@/components/FormInputs/ImageFile";
import { Pencil, Trash2 } from "lucide-react"
import AlertDialogCom from "@/components/backoffice/AlertDialogCom";
import { makeDeleteRequest } from "@/lib/apiRequest";

export default function page() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult, setTotalResult] = useState(1);
  const endpoint = "api/v1/order/user-orders-list"; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataPaginate(endpoint, currentPage, PAGE_SIZE, true);
        //  console.log("getdata", count);
        //  console.log("getdata", data.data);
        setData(data.data);
        setTotalResult(data.all_result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [endpoint, currentPage, PAGE_SIZE, count]);



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    await makeDeleteRequest(
      setLoading,
      "api/v1/brands/" + id,
      "Brand",
      true
    )
    setCount(count + 1);
  }

  return (
    <div className="">
      {/* Heading */}


      {/* Export || Search || Bluk Delete */}
      <TableActions />
      {/* Table */}
      <div className="py-8">
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, i) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      key={i}
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <td className="p-4">{item.pid}</td>
                      <td className="p-4">
                        {item.name}
                      </td>
                      <td className="p-4">
                        {item.mobile}
                      </td>
                      <td className="p-4">
                        {item.email}
                      </td>
                      <td className="p-4">
                        {item.address}
                      </td>
                      <td className="p-4">
                        ${item.amount}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <Pagination
            totalResult={totalResult}
            pageSize={PAGE_SIZE}
            handlePage={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
