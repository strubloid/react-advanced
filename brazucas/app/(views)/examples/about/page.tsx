"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load About component from views/examples/about/About.tsx
const AboutPage = dynamic(() => import("@components/CodeSplitingAndLazyLoading/About"), { ssr: false });

export default function ExamplesAboutPage() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return show ? <AboutPage /> : <h3>Loading About...</h3>;
}
