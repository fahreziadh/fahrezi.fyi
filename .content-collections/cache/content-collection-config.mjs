// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
var posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string()
  })
});
var content_collections_default = defineConfig({
  collections: [posts]
});
export {
  content_collections_default as default
};
