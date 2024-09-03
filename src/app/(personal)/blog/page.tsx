"use client";

import React, { useEffect, useState } from "react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { format, formatDistance } from "date-fns";

const Page = () => {
  const [isClientIndonesian, setIsClientIndonesian] = useState<boolean>();

  useEffect(() => {
    setIsClientIndonesian(localStorage.getItem("location") === "ID");
  }, []);

  const posts = allPosts
    .filter((e) => e._meta.directory === (isClientIndonesian ? "id" : "en"))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="container max-w-[680px] flex flex-col">
      {posts.map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post.slug}`}
            className="flex flex-row items-start hover:opacity-70 gap-6"
          >
            <div className="grow flex flex-col py-3">
              <p>{post.title}</p>
              <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              {/* <Views slug={post.slug} /> */}
            </div>
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
