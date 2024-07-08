/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                pathname: '/img/logos/**',
            },
        ],
    },
};
export default nextConfig;
