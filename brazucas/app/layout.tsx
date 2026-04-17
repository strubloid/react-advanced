import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Nav from "./components/demo2/Nav";

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
                <div id="alert-holder"></div>
                {children}

                {/* <Nav />
                <Suspense fallback={<div style={{ backgroundColor: "#333", padding: "20px", color: "white", textAlign: "center" }}>Loading...</div>}>
                    {children}
                </Suspense> */}
            </body>
        </html>
    );
}
