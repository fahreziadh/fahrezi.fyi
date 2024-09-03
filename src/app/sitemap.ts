import { allPosts } from "content-collections";

export default async function sitemap() {
  let blogs = allPosts.map((post) => ({
    url: `https://fahrezi.fyi/blog/${post.slug}`,
    lastModified: post.createdAt,
  }));

  let routes = ["", "/blog", "/contact"].map((route) => ({
    url: `https://fahrezi.fyi${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
