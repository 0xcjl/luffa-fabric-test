const nextConfig = {
  reactStrictMode: true,
  distDir: ".next-dev",
  outputFileTracingRoot: new URL("../../", import.meta.url).pathname
};

export default nextConfig;
