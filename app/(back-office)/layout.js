"use client";
import Navbar from '@/components/backoffice/Navbar'
import Sidebar from '@/components/backoffice/Sidebar'
import React, { useState } from "react";

export default function Layout({children}) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      {/* Main Body */}
      <div className="w-full sm:ml-60">
        <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
      </div>
      <div></div>
    </div>
  );
}
