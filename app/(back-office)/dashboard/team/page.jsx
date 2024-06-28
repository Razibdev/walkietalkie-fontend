import PageHeader from '@/components/backoffice/PageHeader';
import TableActions from '@/components/backoffice/TableActions';
import React from 'react'
import CustomTeamTable from "./CustomTeamTable";
export default function page() {

  return (
    <div className="">
      {/* Heading */}
      <PageHeader
        heading="Team"
        linkTitle="Add Team Member"
        href="/dashboard/team/new"
      />

      {/* Export || Search || Bluk Delete */}
      <TableActions />
      {/* Table */}
      <div className="py-8">
        {/* <h2>Table</h2> */}
        <CustomTeamTable />
      </div>
    </div>
  );
}
