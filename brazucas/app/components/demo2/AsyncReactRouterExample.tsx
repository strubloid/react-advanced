"use client";
import { use, Suspense } from "react";
import { MainContainer, MainHeading } from "./StyledElements";
import delay from "./Delay";

// equivalent of <Await resolve={promise}>{(data) => ...}</Await>
const Awaited = ({ promise }: { promise: Promise<unknown> }) => {
    const data = use(promise);
    return <strong>{data as string}</strong>;
};

// equivalent of const { promise } = useLoaderData()
export const AsyncReactRouterExample = ({ promise }: { promise: Promise<unknown> }) => {
    return (
        <MainContainer>
            <MainHeading>
                Main - {" "}
                <Suspense fallback="Fetching...">
                    <Awaited promise={promise} />
                </Suspense>
            </MainHeading>
        </MainContainer>
    );
};

// equivalent of defer({ promise: delay("Fetched Data", 1000) })
export const asyncReactRouterExamplePromise = delay("Fetched Data", 1000);
