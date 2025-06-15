import type { NextConfig } from "next";

const isRender = process.env.RENDER === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isRender ? '' : '/portfolio',
  assetPrefix: isRender ? '' : '/portfolio/',
};

export default nextConfig;
