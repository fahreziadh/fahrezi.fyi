import { allPosts } from "content-collections";
import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.
export async function generateStaticParams() {
  const posts = allPosts.map((p) => ({
    slug: p.slug,
  }));
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function GET(req:Request, {params}:{params:{slug:string}}) {
  const slug = params.slug
  const getTitle = allPosts.find((p) => p.slug === slug)?.title;

  if (!slug || !getTitle) return new Response("Not found", { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 80,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "80px",
          textAlign: "start",
          fontFamily:"'Geist'",
          justifyContent: "flex-start",
          alignItems: "flex-end",
        }}
      >
          {getTitle}
      </div>
    ),
    {
      headers:{
        "Content-Type": "image/png"
      },
      width: 1200,
      height: 675,
      // fonts: [
      //   {
      //     name: "Geist",
      //     data: fontData,
      //     style: "normal",
      //   }
      // ]
    }
  );
}
