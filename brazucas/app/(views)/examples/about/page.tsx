"use client";
import dynamic from "next/dynamic";

// Lazy load About component from views/examples/about/About.tsx
const AboutPage = dynamic(() => import("@components/CodeSplitingAndLazyLoading/About"), { ssr: false });

export default function ExamplesAboutPage() {
    return <AboutPage />;
}
