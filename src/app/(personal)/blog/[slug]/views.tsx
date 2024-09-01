"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Views = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["views", slug],
    queryFn: async () =>
      await fetch(`/api/views`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      }).then((r) => r.json()),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="w-[60px] h-[14px] bg-foreground/5 rounded-full animate-pulse" />
    );
  }

  return <span>{data || 1} views</span>;
};

export default Views;
