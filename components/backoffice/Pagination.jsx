"use client"
import React, {useState} from 'react'

export default function Pagination({totalResult, pageSize, handlePage}) {
    //  const [totalResult, setTotalResult] = useState(1);
    //  const [numberOfPages, setNumberOfPages] = useState(1);
     const [currentPage, setCurrentPage] = useState(1);
      const numberOfPages = Math.ceil(totalResult / pageSize);
       const startIndex = (currentPage - 1) * pageSize;
       const endIndex = startIndex + pageSize;
          const handlePageChange = (page) => {
            handlePage(page)
            setCurrentPage(page);
          };

  return (
    <nav
      className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
      aria-label="Table navigation"
    >
      <span className="text-md font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
        Showing{" "}
        <span className="font-semibold text-gray-50 dark:text-white">
          {startIndex + 1}-{Math.min(endIndex, totalResult)}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-50 dark:text-white">
          {totalResult}
        </span>
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-10">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>

        {Array.from({ length: numberOfPages }, (_, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
                className={
                  currentPage === index + 1
                    ? "flex items-center justify-center px-3 h-10 leading-tight text-gray-50 bg-blue-600 border border-gray-300 hover:bg-blue-700 hover:text-gray-50 dark:bg-slate-100 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-300 dark:hover:text-white"
                    : "flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                }
              >
                {index + 1}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === numberOfPages}
            className="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
