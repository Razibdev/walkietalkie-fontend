import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';
import CustomBannerTable from './CustomBannerTable';

export default function page() {
  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Banners"
        linkTitle="Add Banner"
        href="/dashboard/banners/new"
      />

      {/* Export || Search || Bluk Delete */}
        <TableActions />
      {/* Table */}
      <div className="py-8">
      <CustomBannerTable />
      </div>
    </div>
  );
}
