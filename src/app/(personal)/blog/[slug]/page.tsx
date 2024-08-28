import React, { Suspense } from "react";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { format, formatDistance } from "date-fns";
import { id } from "date-fns/locale/id";
import { ResolvingMetadata } from "next";
import { db } from "@/lib/drizzle";
import { postsViews } from "../../../../../migrations/schema";
import { sql, eq } from "drizzle-orm";

export const dynamic = "force-static"

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return null;

  return {
    ...parent,
    title: post.title,
    openGraph: {
      type: "website",
      url: `https://fahrezi.fyi/blog/${post.slug}`,
      description: "",
      title: post.title,
      siteName: "Fahrezi Adha",
      images: [
        {
          url: `https://fahrezi.fyi/blog/${post.slug}/og`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@fahreziadhaa",
      title: post.title,
      description: "",
      images: [
        {
          url: `https://fahrezi.fyi/blog/${post.slug}/og`,
        },
      ],
      creator: "@fahreziadhaa",
    },
  };
}

export const revalidate = 0;

const page = async ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((p) => p.slug === params.slug);
  const locale = post?.slug.includes("-en") ? "en" : "id";

  if (!post) return notFound();

  return (
    <div className="container max-w-[680px]">
      <h2 className="text-2xl tracking-tighter font-medium">{post.title}</h2>
      <div className="flex flex-row items-center justify-between  mt-2">
        <h3 className="opacity-50 text-sm">
          {format(post.createdAt, "MMMM dd,  yyyy")} (
          {formatDistance(post.createdAt, new Date(), {
            addSuffix: true,
            locale: locale === "id" ? id : undefined,
          })}
          )
        </h3>
        <h3 className="opacity-50 text-sm">
          <Suspense
            fallback={
              <div className="w-[60px] h-[14px] bg-foreground/5 rounded-full animate-pulse" />
            }
          >
            <Views slug={post.slug} />
          </Suspense>
        </h3>
      </div>
      <div className="prose dark:prose-invert prose-zinc mt-6">
        <MDXContent code={post.mdx} />
      </div>
    </div>
  );
};

const Views = async ({ slug }: { slug: string }) => {
  async function getViews(slug: string) {
    return await db
      .insert(postsViews)
      .values({
        id: slug.replace("-en", "").replace("-id", ""),
        views: 1,
      })
      .onConflictDoUpdate({
        target: postsViews.id,
        set: {
          views: sql`${postsViews.views}+1`,
        },
      })
      .returning()
      .then((v) => v[0].views);
  }

  const views = await getViews(slug);

  return <span>{views} views</span>;
};

export default page;
