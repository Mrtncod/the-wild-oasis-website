/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uxpvguwbawbgyftnmtpg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabin-images/**",
      },
    ],
  },
  // output: "export",
  // Added in order to work ⬇️ after output: "export"
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
