"use client";
import { use, Suspense } from "react";
import { MainHeading } from "./StyledElements";
import delay from "./Delay";

// equivalent of <Await resolve={bookCountPromise}>
const AwaitedBookCount = ({ promise }: { promise: Promise<unknown> }) => {
    const bookCount = use(promise);
    return <span>{bookCount as number}</span>;
};

// equivalent of <Await resolve={authorsPromise}>
const AwaitedAuthors = ({ promise }: { promise: Promise<unknown> }) => {
    const authors = use(promise);
    return <span>{authors as string}</span>;
};

export const Books = ({ bookCountPromise, authorsPromise }: {
    bookCountPromise: Promise<unknown>,
    authorsPromise: Promise<unknown>
}) => {
    return (
        <div>
            <MainHeading>Books</MainHeading>
            <p>
                <strong>Available Books: </strong>
                <Suspense fallback="Fetching...">
                    <AwaitedBookCount promise={bookCountPromise} />
                </Suspense>
            </p>
            <p>
                <strong>Authors:</strong>{" "}
                <Suspense fallback="Fetching...">
                    <AwaitedAuthors promise={authorsPromise} />
                </Suspense>
            </p>
        </div>
    );
};

// equivalent of defer({ bookCountPromise, authorsPromise })
export const bookCountPromise = delay(10, 1000);
export const authorsPromise = delay("Codelicks", 2000);
