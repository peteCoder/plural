/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "uploadthing.com",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
            {
                protocol: "https",
                hostname: "img.clerk.com",
                port: '',
            },
            {
                protocol: "https",
                hostname: "subdomain",
                port: '',
            },
            {
                protocol: "https",
                hostname: "files.stripe.com",
                port: '',
            },
        ],
    },
    reactStrictMode: false,
};

export default nextConfig;
