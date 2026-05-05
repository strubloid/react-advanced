"use client";
import dynamic from "next/dynamic";

// Lazy load Home component from views/examples/Home.tsx
const Home = dynamic(() => import("./homepage/Home"), { ssr: false });

export default function ExamplesHomePage() {
    return <Home />;
}
