import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Enables styled-components support
  },
};

export default nextConfig;


