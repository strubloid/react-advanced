"use client";
import mitt from "mitt";
import { ErrorBoundry } from "./components/error/ErrorBoundry";
import { ErrorFallback } from "./components/error/ErrorFallback";
import { APIExample } from "./examples/APIExample";
import { CancelPreviousRequestExample } from "./examples/CancelPreviousRequestExample";
import { HocExample } from "./examples/HocExample";
import { CustomHookExample } from "./examples/CustomHookExample";
import { UsingReactQueryExample } from "./examples/UsingReactQueryExample";
import { InfiniteScrollExample } from "./examples/InfiniteScrollExample";
import { QueryCancelationWithAbortSignalExample } from "./examples/QueryCancelationWithAbortSignalExample";
import { StateManagementPatternsExample } from "./examples/StateManagementPatternsExample";
import { ShoppingListExample } from "./examples/ShoppingListExample";
import { CodeSplitingAndLazyLoadingExample } from "./examples/CodeSplitingAndLazyLoadingExample";

// creating an event emitter to be used in the observer pattern example
export const emitter = mitt();

export default function Home() {

    return (
        <>

            <ErrorBoundry fallback={(error) => <ErrorFallback error={error} />}>

                <CodeSplitingAndLazyLoadingExample />

                {/* <ShoppingListExample /> */}

                {/* <StateManagementPatternsExample /> */}

                {/* <QueryCancelationWithAbortSignalExample /> */}

                {/* <InfiniteScrollExample /> */}

                {/* <UsingReactQueryExample /> */}

                {/* <CancelPreviousRequestExample /> */}

                {/* <APIExample /> */}

                {/* <RouteExample /> */}

                {/* <OptimizingContextAPIExample /> */}

                {/* <ElementPropExample /> */}

                {/* <AsyncReactRouterExample promise={asyncReactRouterExamplePromise} /> */}
                {/* <UseTransitionExample /> */}

                {/* <UseDeferredValueExample /> */}

                {/* <UseCallbackExample /> */}

                {/* <UseIDExample /> */}

                {/* <UseLayoutEffectExample /> */}

                {/* <EventExample /> */}

                {/* <KeysExample /> */}

                {/* <ErrorBoundriesExample /> */}

                {/* <PortalExample /> */}

                {/* <ParentComponent /> */}

                {/* <CardExample /> */}

                {/* <RecursiveExample /> */}

                {/* <CustomHookExample /> */}

                {/* <HocExample /> */}

            </ErrorBoundry>
        </>
    );
}
