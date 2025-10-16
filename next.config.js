/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? "/portfolio-gabrielly" : "",
  assetPrefix: isProd ? "/portfolio-gabrielly/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
