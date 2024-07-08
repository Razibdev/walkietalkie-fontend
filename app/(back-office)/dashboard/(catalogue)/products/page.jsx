import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';
import CustomProductTable from './CustomProductTable';

export default function page() {
  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Products"
        linkTitle="Add Product"
        href="/dashboard/products/new"
      />

      {/* Export || Search || Bluk Delete */}
        <TableActions />
      {/* Table */}
      <div className="py-8">
      <CustomProductTable />
      </div>
    </div>
  );
}
