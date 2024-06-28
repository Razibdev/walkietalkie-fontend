"use client";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

export default function ThemeSwitcherBtn() {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    useEffect(()=>{
        setMounted(true);
    }, []);
    if(!mounted){
        return null;
    }
  return (
    <div
      className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-20`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <Moon fill="rgb(22 163 74 /1)" className="text-green-600" />
      ) : (
        <Sun fill="rgb(22 163 74 /1)" className="text-green-600" />
      )}
    </div>
  );
}
