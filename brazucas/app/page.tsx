"use client";
import mitt from "mitt";
import { ErrorBoundry } from "./components/error/ErrorBoundry";
import { ErrorFallback } from "./components/error/ErrorFallback";
import { PortalExample } from "@examples/PortalExample";
import { ParentComponent } from "@examples/Parent";
import { CardExample } from "@examples/CardExample";
import { RecursiveExample } from "@examples/RecursiveExample";
import { CustomHookExample } from "@examples/CustomHookExample";
import { HocExample } from "@examples/HocExample";
import { ErrorBoundriesExample } from "@examples/ErrorBoundriesExample";
import { KeysExample } from "@examples/KeysExample";
import { EventExample } from "@examples/EventExample";
import { UseLayoutEffectExample } from "@examples/UseLayoutEffectExample";
import { UseIDExample } from "@examples/UseIDExample";
import { UseCallbackExample } from "@examples/UseCallbackExample";
import { UseDeferredValueExample } from "@examples/UseDefferedValueExample";
import { UseTransitionExample } from "@examples/UseTransitionExample";
import { AsyncReactRouterExample, asyncReactRouterExamplePromise } from "@examples/AsyncReactRouterExample";
import { ElementPropExample } from "@examples/ElementPropExample";
import { OptimizingContextAPIExample } from "@examples/OptimizingContextAPIExample";
import { RouteExample } from "@examples/RouteExample";

// creating an event emitter to be used in the observer pattern example
export const emitter = mitt();

export default function Home() {

    return (
        <>

            <ErrorBoundry fallback={(error) => <ErrorFallback error={error} />}>

                <RouteExample />

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
