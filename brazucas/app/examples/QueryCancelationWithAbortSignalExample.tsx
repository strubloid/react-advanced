import { JSX } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { InfiniteScrollQuotes } from "../components/quotes/InfiniteScrollQuotes";
import { QueryCancelationWithAbortSignal } from "../components/quotes/QueryCancelation";

export const QueryCancelationWithAbortSignalExample = (): JSX.Element => {

    const queryClient = new QueryClient();

    return (
        // It is important to wrap the component that uses react-query hooks with the QueryClientProvider,
        // otherwise it will throw an error because it won't be able to find the QueryClient instance in
        // the context
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <QueryCancelationWithAbortSignal />
        </QueryClientProvider>
    );
};
