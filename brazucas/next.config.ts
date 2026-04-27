import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,
    compiler: {
        styledComponents: true,
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "http://localhost:9090/:path*",
            },
        ];
    },
};

export default nextConfig;
