/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", 'cdn.discordapp.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
