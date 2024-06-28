import React from 'react'
import Heading from './Heading';
import Link from 'next/link';
import { Plus } from 'lucide-react';
export default function PageHeader({heading, linkTitle, href}) {
  return (
    <div className="flex justify-between">
      {/* Heading */}
      <Heading title={heading} />
      <Link
        className="flex items-center space-x-3text-white bg-green-600 hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-green-600/50 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-green-600/55 me-2 text-md space-x-3"
        href={href}
      >
        <Plus />
        <span>{linkTitle}</span>
      </Link>
    </div>
  );
}
