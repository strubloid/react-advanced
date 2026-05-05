"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Lazy load Contact component from views/examples/contact/Contact.tsx
const Contact = dynamic(() => import("@components/CodeSplitingAndLazyLoading/Contact"), { ssr: false });

export default function ExamplesContactPage() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return show ? <Contact /> : null;
}
