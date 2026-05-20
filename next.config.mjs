/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // IMPORTANT: If deploying to https://kpaul7.github.io/portfolio, uncomment the line below:
  basePath: '/portfolio',
};

export default nextConfig;