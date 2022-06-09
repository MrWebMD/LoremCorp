/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  devIndicators: {
    buildActivity: false,
  },
}

module.exports = nextConfig
