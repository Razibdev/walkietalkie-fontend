import Link from 'next/link';
import React from 'react'

export default function FormHeader({ title, href }) {
  return (
    <div className="flex items-center justify-between py-6 px-12 bg-white dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-50 shadow">
      <h2 className="text-xl font-semibold ">{title}</h2>
      <button>
        <Link href={href}> X</Link>
      </button>
    </div>
  );
}
