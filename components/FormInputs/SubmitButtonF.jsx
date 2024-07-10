import React from "react";

export default function SubmitButtonF({ isLoading=false, title, loadingTitle }) {
  return (
    <div className="sm:col-span-1 flex justify-end">
      {isLoading ? (
        <button
          disabled
          type="button"
          className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
        >
          {loadingTitle}
        </button>
      ) : (
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-700 dark:bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
        >
          <span>{title}</span>
        </button>
      )}
    </div>
  );
}
