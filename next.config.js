/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio-gabrielly",
  assetPrefix: "/portfolio-gabrielly/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
