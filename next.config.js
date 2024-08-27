const { withContentCollections } = require("@content-collections/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  }
};

module.exports = withContentCollections(nextConfig);
