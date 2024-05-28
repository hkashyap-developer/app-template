/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["cdn.sanity.io", "via.placeholder.com"],
    },
  };
  
  export default nextConfig;





/*
const nextConfig = {
    images: {
      remotePatterns: [
        {
          hostname: "img.clerk.com",
        },
        {
          hostname: "firebasestorage.googleapis.com",
        },
      ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };
  
  export default nextConfig;
  */