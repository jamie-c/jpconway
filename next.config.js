/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:'export'
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.weatherapi.com",
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
  },
}

module.exports = nextConfig
