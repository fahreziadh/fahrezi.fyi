"use client";

import React, { Suspense } from "react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getViews } from "@/lib/actions";
import { Metadata } from "next";

// New Idea: Speechify reader for every people's blog

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "fahrezi's blog",
  description: "fahrezi's blog",
  keywords: "fahrezi, blog, writing, writings, blogging, writing blog, nextjs, react, typescript, tailwindcss, nextjs blog",
}

const Page = () => {
  return (
    <div className="container max-w-[680px] flex flex-col">
      {allPosts
        .filter((p) => p._meta.directory === "en")
        .map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post.slug}`}
            className="p-3 -mx-3 hover:opacity-70 w-full rounded-md flex flex-col"
          >
            <p>{post.title}</p>

            <Views slug={post.slug} />
          </Link>
        ))}
    </div>
  );
};

function Views({ slug }: { slug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["views"],
    queryFn: async () => await getViews(),
    refetchOnWindowFocus: false,
  });

  const views =
    data?.find((v) => v.id === slug.replace("-en", "").replace("-id", ""))
      ?.views || 1;

  if (isLoading) return <div className="w-[60px] h-[16px] my-1 " />;

  return <span className="opacity-50">{views} views</span>;
}

export default Page;
