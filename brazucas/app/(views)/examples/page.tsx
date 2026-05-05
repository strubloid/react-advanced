"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load Home component from views/examples/Home.tsx
const Home = dynamic(() => import("./homepage/Home"), { ssr: false });

export default function ExamplesHomePage() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return show ? <Home /> : <h3>Loading Page...</h3>;
}
