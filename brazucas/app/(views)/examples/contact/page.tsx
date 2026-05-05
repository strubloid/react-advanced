"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@components/CodeSplitingAndLazyLoading/Contact"), { ssr: false });

export default function ExamplesContactPage() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return show ? <Contact /> : <h3>Loading Contact...</h3>;
}
