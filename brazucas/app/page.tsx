"use client";
import mitt from "mitt";
import { ErrorBoundry } from "./components/error/ErrorBoundry";
import { ErrorFallback } from "./components/error/ErrorFallback";
import { APIExample } from "./examples/APIExample";
import { CancelPreviousRequestExample } from "./examples/CancelPreviousRequestExample";

// creating an event emitter to be used in the observer pattern example
export const emitter = mitt();

export default function Home() {

    return (
        <>

            <ErrorBoundry fallback={(error) => <ErrorFallback error={error} />}>

                <CancelPreviousRequestExample />

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
