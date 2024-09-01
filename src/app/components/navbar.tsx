"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="container max-w-[680px] mt-6 lg:mt-10 flex flex-row items-center gap-4 justify-between">
      <div className="flex flex-row items-center tracking-tight gap-4 md:gap-6">
        <a href="/" className="hover:opacity-70">
          home
        </a>
        <a href="/blog" className="hover:opacity-70">
          blog
        </a>
        {/* <a href="/contact" className="hover:opacity-70">
        contact
      </a> */}
        {/* <a href="/uses" className="hover:opacity-70">
        uses
      </a>

     */}
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-6">
        {isClient ? <button
          type="button"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          className="transition-all hover:opacity-70"
        >
          {theme === "dark" ? "⛅" : "🌖"}
        </button>: null}
      </div>
    </div>
  );
};
