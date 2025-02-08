import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "tw-website"; // Update this if your repo name differs

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix: isProd ? `/${repoName}/` : "",
  basePath: isProd ? `/${repoName}` : "",
  trailingSlash: true,
  // Disable Next.js Image Optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;