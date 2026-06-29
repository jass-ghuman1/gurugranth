/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static HTML export — deploys anywhere, no server needed
  images: { unoptimized: true },
  trailingSlash: true
};
export default nextConfig;
