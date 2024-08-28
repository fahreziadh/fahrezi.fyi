import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Fahrezi's blog",
  description: "Fahrezi's blog",
  keywords:
    "fahrezi, blog, writing, writings, blogging, writing blog, nextjs, react, typescript, tailwindcss, nextjs blog",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
