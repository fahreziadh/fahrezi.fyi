"use server";

import { unstable_noStore } from "next/cache";
import { db } from "./drizzle";
import { postsViews } from "../../migrations/schema";
import { sql } from "drizzle-orm";

export const getViews = async () => {
  unstable_noStore();
  return await db.query.postsViews.findMany();
};


export async function getAndIncrementView(slug: string) {
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