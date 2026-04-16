"use client";
import mitt from "mitt";
import { PortalExample } from "./components/portals/PortalExample";
import { ParentComponent } from "./components/observer/Parent";
import { CardExample } from "./components/cards/CardExample";
import { RecursiveExample } from "./components/recursion/RecursiveExample";
import { CustomHookExample } from "./components/hooks/CustomHookExample";
import { HocExample } from "./components/hoc/HocExample";
import { ErrorBoundriesExample } from "./components/error/ErrorBoundriesExample";
import { ErrorBoundry } from "./components/error/ErrorBoundry";
import { ErrorFallback } from "./components/error/ErrorFallback";
import { KeysExample } from "./components/keys/KeysExample";
import { EventExample } from "./components/event/EventExample";

// creating an event emitter to be used in the observer pattern example
export const emitter = mitt();

export default function Home() {

    return (
        <>
            <ErrorBoundry fallback={(error) => <ErrorFallback error={error} />}>

                <EventExample />

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
