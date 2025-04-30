"use client";

import { allPosts } from "content-collections";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { formatDistance } from "date-fns";
import Image from "next/image";

export const dynamic = "force-static";

const Page = () => {
  const posts = allPosts
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <div className="container max-w-[680px] flex flex-col gap-6">
      {posts.map((post) => (
        <Link
          key={post._meta.path}
          href={`/blog/${post.slug}`}
          className="flex flex-row items-start border border-foreground/0 hover:bg-foreground/5 hover:border-foreground/10 -m-1 p-1 rounded-md"
        >
          <Image
            src={post.thumbnail}
            alt={post.title}
            width={60}
            height={60}
            className="aspect-square object-cover border border-foreground/5 shadow-sm rounded-md"
          />
          <div className="flex flex-col pl-4">
            <p className="font-medium">{post.title}</p>
            <div className="flex flex-row gap-2">
              <span className="opacity-50">
                {formatDistance(post.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              <Views slug={post.slug} />
            </div>
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
    data?.find((v: any) => v.id === slug)
      ?.views || 1;

  if (isLoading) return <div className="w-[60px] h-[16px] my-1 " />;

  return <span className="opacity-50">{views} views</span>;
}

export default Page;
