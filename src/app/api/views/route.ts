import { db } from "@/lib/drizzle";
import { postsViews } from "../../../../migrations/schema";
import { sql } from "drizzle-orm";

export const revalidate = 0;

export const GET = async() =>{
    return Response.json(await db.query.postsViews.findMany())
}


export async function POST(req: Request) {
    const { slug } = await req.json();
    const res =  await db
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
    return Response.json(res)
  }