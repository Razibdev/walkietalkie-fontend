import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';
import CustomCategoryTable from './CustomCategoryTable';

export default function page() {
  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Categories"
        linkTitle="Add Category"
        href="/dashboard/categories/new"
      />

      {/* Export || Search || Bluk Delete */}
        <TableActions />
      {/* Table */}
      <div className="py-8">
      <CustomCategoryTable />
      </div>
    </div>
  );
}
