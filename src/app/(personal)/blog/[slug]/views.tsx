"use client"
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getAndIncrementView } from "@/lib/actions";

const Views = ({ slug }: { slug: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["views", slug],
    queryFn: async () => await getAndIncrementView(slug),
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="w-[60px] h-[14px] bg-foreground/5 rounded-full animate-pulse" />
    );
  }

  return <span >{data || 1} views</span>;
};

export default Views