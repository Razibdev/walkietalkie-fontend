import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react'
import CustomProjectTable from './CustomProjectTable';
export default function page() {

  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Project"
        linkTitle="Add Project"
        href="/dashboard/project/new"
      />

      {/* Export || Search || Bluk Delete */}
        <TableActions />
      {/* Table */}
      <div className="py-8">
        {/* <h2>Table</h2> */}
        <CustomProjectTable />
      </div>
    </div>
  );
}
