import React from "react";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { format, formatDistance } from "date-fns";
import { id } from "date-fns/locale/id";
import { ResolvingMetadata } from "next";

export async function generateStaticParams() {
  const posts = allPosts.map((p) => ({
    slug: p.slug,
  }));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

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

const page = ({ params }: { params: { slug: string } }) => {
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

        {/* <h3 className="opacity-50 text-sm">0 views</h3> */}
      </div>
      <div className="prose dark:prose-invert prose-zinc mt-6">
        <MDXContent code={post.mdx} />
      </div>
    </div>
  );
};

export default page;
