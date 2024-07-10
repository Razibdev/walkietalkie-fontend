import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react';
import CustomSliderTable from './CustomSliderTable';

export default function page() {
  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Sliders"
        linkTitle="Add Slider"
        href="/dashboard/sliders/new"
      />

      {/* Export || Search || Bluk Delete */}
        <TableActions />
      {/* Table */}
      <div className="py-8">
      <CustomSliderTable />
      </div>
    </div>
  );
}
