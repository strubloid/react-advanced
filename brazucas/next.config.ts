import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// load .env from the workspace root (one level above the brazucas/ project)
const envPath = path.resolve(__dirname, "../.env");
if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, "utf-8")
        .split("\n")
        .forEach((line) => {
            const trimmed = line.trim();
            if (!trimmed || trimmed.startsWith("#")) return;
            const [key, ...rest] = trimmed.split("=");
            process.env[key.trim()] = rest.join("=").trim().replace(/^["']|["']$/g, "");
        });
}

const nextConfig: NextConfig = {
    reactStrictMode: false,
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
