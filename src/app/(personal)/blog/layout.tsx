import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "fahrezi's blog",
  description: "fahrezi's blog",
  keywords:
    "fahrezi, blog, writing, writings, blogging, writing blog, nextjs, react, typescript, tailwindcss, nextjs blog",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
