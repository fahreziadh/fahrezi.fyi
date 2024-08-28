import { allPosts } from 'content-collections';
import { ResolvingMetadata } from 'next';
import React from 'react'

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
export const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>{children}</>
  )
}