import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="container max-w-[680px] mt-14 flex flex-row items-center gap-4 justify-between">
        <div className="flex flex-row items-center gap-4">
          <a href="/" className="hover:opacity-70">
            home
          </a>
          <a href="/blog" className="hover:opacity-70">
            blog
          </a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a
            target="_blank"
            href="https://twitter.com/fahrezadha"
            className="transition-all hover:opacity-70"
          >
            <XIcon />
          </a>
          <a
            target="_blank"
            href="https://github.com/fahreziadh"
            className="transition-all hover:opacity-70"
          >
            <GithubIcon />
          </a>
        </div>
      </nav>
      <main className="pt-16">{children}</main>
    </>
  );
};

const XIcon = () => {
  return (
    <Image
      src="/x-icon.webp"
      alt="x"
      width={16}
      height={16}
    />
  );
};

const GithubIcon = () => {
  return (
    <Image
      className="w-[18px] h-[18px]"
      src="/github-mark.png"
      alt="github"
      width={18}
      height={18}
    />
  );
};

export default Layout;