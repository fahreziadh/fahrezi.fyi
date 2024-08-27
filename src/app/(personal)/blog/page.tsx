import React from "react";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import { format, formatDistance } from "date-fns";

// New Idea: Speechify reader for every people's blog

const Page = () => {
  return (
    <div className="container max-w-[680px] flex flex-col">
      {allPosts
        .filter((p) => p._meta.directory === "en")
        .map((post) => (
          <Link
            key={post._meta.path}
            href={`/blog/${post.slug}`}
            className="p-4 -mx-4 hover:opacity-70 w-full rounded-md flex flex-col"
          >
            <p>{post.title}</p>
            {/* <p className="opacity-50">124 views</p> */}
            <h3 className="opacity-50 text-sm">
              {format(post.createdAt, "MMMM dd,  yyyy")} (
              {formatDistance(post.createdAt, new Date(), {
                addSuffix: true,
              })}
              )
            </h3>
          </Link>
        ))}
    </div>
  );
};

export default Page;
