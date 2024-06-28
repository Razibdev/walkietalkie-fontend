"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getDataPaginate } from "@/lib/getData";
import Pagination from "@/components/backoffice/Pagination";
import ImageFile from "@/components/FormInputs/ImageFile";
import {Pencil, Trash2} from "lucide-react"
import AlertDialogCom from "@/components/backoffice/AlertDialogCom";
import { makeDeleteRequest } from "@/lib/apiRequest";
// import {Pen}
export default function CustomProjectTable() {
   const [data, setData] = useState(null);
   const [count, setCount] = useState(0);
   const [loading, setLoading] = useState(false);
     const PAGE_SIZE = 10;
     const [currentPage, setCurrentPage] = useState(1);
      const [totalResult, setTotalResult] = useState(1);
   const endpoint = "api/v1/project"; // Replace 'your-endpoint' with the actual endpoint

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

  const handleDelete = async (id) =>{
   await makeDeleteRequest(
          setLoading,
          "api/v1/project/"+id,
          "Project",
          true
    )
    setCount(count+1);
  }


  return (
    <div className="">
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
                Image
              </th>


              <th scope="col" className="px-6 py-3">
                Project
              </th>

              <th scope="col" className="px-6 py-3">
                Description
              </th>
             
              <th scope="col" className="px-6 py-3">
                Action
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
                    <td className="px-6 py-4">{item.pid}</td>
                    <td className="px-6 py-4">
                      {/* <img src={item.image} alt={item.project_name} /> */}
                      <div style={{ width: "100px", height: "100px" }}>
                        <ImageFile
                          src={item.image}
                          alt={item.project_name}
                          className="h-full w-full"
                        />
                      </div>
                    </td>

                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.project_name}
                    </th>

                    <td className="px-6 py-4">
                      {/* {new Date(item.createdAt).toLocaleDateString()} */}
                      {item.description}
                    </td>
                    <td className="flex gap-4 px-6 py-4">
                      <Link href={`/dashboard/project/update/${item._id}`}>
                        <Pencil className="w-8 h-8" />
                      </Link>

                      {/* <Trash2 className="w-8 h-8 cursor-pointer" /> */}
                      <AlertDialogCom id={item._id} deleteConfirm={handleDelete} />

                      {/* <Link
                        href={`/dashboard/projects/${item.pid}/order`}
                        type="button"
                        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Enter To The Project
                      </Link> */}
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
  );
}
