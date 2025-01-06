import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

//export default nextConfig;
const withVercelToolbar = require("@vercel/toolbar/plugins/next")();
// Instead of module.exports = nextConfig, do this:
module.exports = withVercelToolbar(nextConfig);
