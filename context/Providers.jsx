"use client";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </ThemeProvider>
  );
}
