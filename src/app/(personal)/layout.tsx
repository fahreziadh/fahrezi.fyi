import React from "react";
import { Navbar } from "../components/navbar";
import CheckLocation from "../components/check-location";

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <CheckLocation />
      <Navbar />
      <main className="pt-12 pb-32 antialiased">{children}</main>
    </>
  );
};


export default Layout;
