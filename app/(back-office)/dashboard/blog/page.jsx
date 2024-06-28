import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react'
import CustomBlogTable from "./CustomBlogTable";
export default function page() {

  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Blog"
        linkTitle="Add Blog"
        href="/dashboard/blog/new"
      />

      {/* Export || Search || Bluk Delete */}
      <TableActions />
      {/* Table */}
      <div className="py-8">
        {/* <h2>Table</h2> */}
        <CustomBlogTable />
      </div>
    </div>
  );
}
