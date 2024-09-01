import React from "react";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { format, formatDistance } from "date-fns";
import { id } from "date-fns/locale/id";
import Views from "./views";

export const dynamic = "force-static";

const Page = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <div className="container max-w-[680px]">
      <h2 className="text-2xl text-start tracking-tight font-bold font-mono">
        {post.title}
      </h2>
      <div className="list-disc flex flex-row items-center justify-between mt-4 opacity-50 font-mono  text-sm">
        <span>
          {format(post.createdAt, "MMMM dd,  yyyy")} (
          {formatDistance(post.createdAt, new Date(), {
            addSuffix: true,
          })}
          )
        </span>
        <Views slug={post.slug} />
      </div>
      <div className="prose dark:prose-invert  prose-zinc mt-8">
        <MDXContent code={post.mdx} />
      </div>
    </div>
  );
};

export default Page;
