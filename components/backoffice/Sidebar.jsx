"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from "../../public/logo-dark.svg";
import { Boxes, ChevronDown, ChevronRight, CircleDollarSign, Compass, ExternalLink, Framer, LayoutGrid, LayoutList, LogOut, MonitorPlay, ScanSearch, SendToBack, Settings, Slack, User, Users2, Warehouse } from 'lucide-react';
import { usePathname } from 'next/navigation';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";


export default function Sidebar({ showSidebar, setShowSidebar, logout }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const sidebarLinks = [
    { title: "Customers", icon: Users2, href: "/dashboard/customers" },
    { title: "Project", icon: Warehouse, href: "/dashboard/project" },
    { title: "Portfolio", icon: Framer, href: "/dashboard/portfolio" },
    { title: "Blog", icon: Compass, href: "/dashboard/blog" },
    { title: "Team", icon: User, href: "/dashboard/team" },
    // { title: "Markets", icon: Warehouse, href: "/dashboard/markets" },
    // { title: "Farmers", icon: Framer, href: "/dashboard/farmers" },
    // { title: "Orders", icon: Compass, href: "/dashboard/orders" },
    // { title: "Wallet", icon: CircleDollarSign, href: "/dashboard/wallet" },
    // { title: "Staff", icon: User, href: "/dashboard/staff" },
    { title: "Setting", icon: Settings, href: "/dashboard/setting" },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/dashboard/online-store",
    },
  ];

  const catalogueLinks = [
    { title: "Products", icon: Boxes, href: "/dashboard/products" },
    { title: "Categories", icon: LayoutList, href: "/dashboard/categories" },
    { title: "Attributes", icon: SendToBack, href: "/dashboard/attributes" },
    { title: "Coupons", icon: ScanSearch, href: "/dashboard/coupons" },
    { title: "Store Sliders", icon: MonitorPlay, href: "/dashboard/sliders" },
  ];

  return (
    <div
      className={`dark:bg-slate-700 bg-slate-50 space-y-6 w-60 h-screen dark:text-slate-50 text-slate-700 fixed left-0 top-0 shadow-md overflow-y-auto pb-16 sm:pb-0 ${
        showSidebar ? "sm:block mt-16 sm:mt-0" : "hidden sm:block"
      }`}
      style={{ zIndex: 1 }}
    >
      <Link
        className="space-y-5 px-6 py-4"
        href="/dashboard"
        onClick={() => setShowSidebar(false)}
      >
        <Image src={Logo} alt="limifood logo" className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-green-600"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid /> <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
            <div className="flex items-center space-x-3  py-2 justify-between">
              <div className="flex items-center space-x-3">
                <Slack /> <span>Catalogue</span>
              </div>
              {openMenu === true ? <ChevronDown /> : <ChevronRight />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-4 pl-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-2 text-sm py-2 text-green-600"
                      : "flex items-center space-x-2 text-sm py-2"
                  }
                >
                  <Icon className="mr-1 h-4 w-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                pathname === item.href
                  ? "flex items-center space-x-3 px-6 py-2 border-l-4 border-green-600 text-green-600"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon /> <span>{item.title}</span>
            </Link>
          );
        })}

        <div className="px-6 py-2">
          <button
            onClick={() => logout()}
            className="flex items-center space-x-3 bg-green-600 px-6 py-2 rounded-md text-slate-50"
          >
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
