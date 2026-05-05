"use client";
import dynamic from "next/dynamic";

// Lazy load Contact component from views/examples/contact/Contact.tsx
const Contact = dynamic(() => import("@components/CodeSplitingAndLazyLoading/Contact"), { ssr: false });

export default function ExamplesContactPage() {
    return <Contact />;
}
