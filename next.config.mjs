/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'certificates.ccbp.in' },
            { protocol: 'https', hostname: 's3-ap-south-1.amazonaws.com' },
            { protocol: 'https', hostname: 'courses.cognitiveclass.ai' },
            { protocol: 'https', hostname: 'forage-uploads-prod.s3.amazonaws.com' },
            { protocol: 'https', hostname: 'via.placeholder.com' },
        ],
    },
};

export default nextConfig;
