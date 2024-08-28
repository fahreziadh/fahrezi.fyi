import React, { Suspense } from "react";
import { allPosts } from "content-collections";
import Link from "next/link";
import { db } from "@/lib/drizzle";
import { unstable_noStore } from "next/cache";

// New Idea: Speechify reader for every people's blog


const Page =  () => {
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
            <h3 className="opacity-50">
              <Suspense fallback={<div className="w-[60px] h-[16px] my-1 " />}>
                <Views slug={post.slug} />
              </Suspense>
            </h3>
          </Link>
        ))}
    </div>
  );
};

async function Views({ slug }: { slug: string }) {
  unstable_noStore();

  const views = await db.query.postsViews
    .findFirst({
      where(fields, operators) {
        return operators.eq(
          fields.id,
          slug.replace("-en", "").replace("-id", "")
        );
      },
    })
    .then((v) => v?.views || 1);

  return <span>{views} views</span>;
}

export default Page;
