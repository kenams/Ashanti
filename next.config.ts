import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: {
    root: projectRoot
  }
};

export default nextConfig;
