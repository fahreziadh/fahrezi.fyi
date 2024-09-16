"use client";

import React, { useEffect, useState } from "react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
import Image from "next/image";

const Page = () => {
  const [isClientIndonesian, setIsClientIndonesian] = useState<boolean>();

  useEffect(() => {
    setIsClientIndonesian(localStorage.getItem("location") === "ID");
  }, []);

  const posts = allPosts
    .filter((e) => e._meta.directory === (isClientIndonesian ? "id" : "en"))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  
  if (isClientIndonesian === undefined) {
    return <div className="container max-w-[680px]">Loading...</div>;
  }

  return (
    <div className="container max-w-[680px] grid sm:grid-cols-2 gap-6">
      {posts.map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post.slug}`}
            className="flex flex-col items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 transition-all rounded-md -m-3 p-3"
          >
              <Image src={post.thumbnail} alt={post.title} width={400} height={300} className="aspect-[16/9] object-cover rounded-lg border border-foreground/5 shadow-sm w-full min-h-[200px] min-w-full"/>
              <p className="mt-4">{post.title}</p>
              <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              {/* <Views slug={post.slug} /> */}
          </Link>
        ))}
    </div>
  );
};

function Views({ slug }: { slug: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["views"],
    queryFn: async () => await fetch(`/api/views`).then((r) => r.json()),
    refetchOnWindowFocus: false,
  });

  const views =
    data?.find((v: any) => v.id === slug.replace("-en", "").replace("-id", ""))
      ?.views || 1;

  if (isLoading) return <div className="w-[60px] h-[16px] my-1 " />;

  return <span className="opacity-50">{views} views</span>;
}

export default Page;
