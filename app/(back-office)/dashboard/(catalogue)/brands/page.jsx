import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';
import CustomBrandTable from './CustomBrandTable';

export default function page() {
  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Brands"
        linkTitle="Add Brand"
        href="/dashboard/brands/new"
      />

      {/* Export || Search || Bluk Delete */}
        <TableActions />
      {/* Table */}
      <div className="py-8">
      <CustomBrandTable />
      </div>
    </div>
  );
}
