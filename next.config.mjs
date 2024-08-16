/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.gamezop.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
