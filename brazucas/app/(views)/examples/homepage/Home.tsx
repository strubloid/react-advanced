import dynamic from "next/dynamic";

// Lazy load Home component from views/examples/homepage/Home.tsx
const HomePage = dynamic(() => import("@components/CodeSplitingAndLazyLoading/Home"), { ssr: false });

export default function Home() {
    return <HomePage />;
}
