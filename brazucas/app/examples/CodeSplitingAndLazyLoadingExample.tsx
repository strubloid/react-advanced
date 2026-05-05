import { JSX } from "react";
import dynamic from "next/dynamic";
import ExamplesLayout from "@/app/(views)/examples/layout";

const ExamplesHome = dynamic(() => import("@/app/(views)/examples/page"), { ssr: false });

export const CodeSplitingAndLazyLoadingExample = (): JSX.Element => {
    return (
        <ExamplesLayout>
            <ExamplesHome />
        </ExamplesLayout>
    );
};
