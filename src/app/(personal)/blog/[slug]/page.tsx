import React from "react";
import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { format, formatDistance } from "date-fns";
import { id } from "date-fns/locale/id";
import { useQuery } from "@tanstack/react-query";
import { getAndIncrementView } from "@/lib/actions";

export const dynamic = "force-static";

const Page = ({ params }: { params: { slug: string } }) => {
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
        {/* <Views slug={post.slug} /> */}
      </div>
      <div className="prose dark:prose-invert prose-zinc mt-6">
        <MDXContent code={post.mdx} />
      </div>
    </div>
  );
};

// const Views = ({ slug }: { slug: string }) => {
//   const { data, isLoading } = useQuery({
//     queryKey: ["views", slug],
//     queryFn: async () => await getAndIncrementView(slug),
//     refetchOnWindowFocus: false,
//   });

//   if (isLoading) {
//     return (
//       <div className="w-[60px] h-[14px] bg-foreground/5 rounded-full animate-pulse" />
//     );
//   }

//   return <span className="opacity-50 text-sm">{data || 1} views</span>;
// };

export default Page;
