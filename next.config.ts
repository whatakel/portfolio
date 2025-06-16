import type { NextConfig } from "next";

const isRender = process.env.RENDER === "true";
const isLocal = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isRender || isLocal ? "" : "/portfolio",
  assetPrefix: isRender || isLocal ? "" : "/portfolio/",
};

export default nextConfig;
