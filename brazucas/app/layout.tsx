import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Brazucas",
    description: "Cool App made by a Brazuca member, aka Strubloid",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            {/* Adding supressHydrationWarning to avoid hydration error of Gramatically */}
            <body suppressHydrationWarning className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}
