"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="container max-w-[680px] mt-6 lg:mt-10 flex flex-row items-center gap-4 justify-between"
    >
      <div className="flex flex-row items-center tracking-tight gap-4 md:gap-6">
        <Link href="/" className="hover:opacity-70">
          <Image
            src="/fahrezi.png"
            alt="logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>
        <Link href="/" className="hover:opacity-70">
          home
        </Link>
        <Link href="/blog" className="hover:opacity-70">
          blog
        </Link>
        <Link href="/contact" className="hover:opacity-70">
          contact
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4 md:gap-6">
        {isClient ? (
          <button
            type="button"
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="transition-all hover:opacity-70"
          >
            {theme === "dark" ? <SunIcon size={16} /> : <MoonIcon size={16} />}
          </button>
        ) : null}
      </div>
    </motion.div>
  );
};
