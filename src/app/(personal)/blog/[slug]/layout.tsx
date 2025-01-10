import { allPosts } from "content-collections";
import { Metadata } from "next";
import React from "react";

type Params = { slug: string };

export async function generateMetadata(props: {
  params: Params;
}): Promise<Metadata> {
  const params = await props.params;
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  
  return {
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
