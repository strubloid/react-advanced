import { JSX } from "react";
import FetchTopQuotes from "../components/quotes/TopQuotes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

export const UsingReactQueryExample = (): JSX.Element => {

    const queryClient = new QueryClient();

    return (
        // It is important to wrap the component that uses react-query hooks with the QueryClientProvider,
        // otherwise it will throw an error because it won't be able to find the QueryClient instance in
        // the context
        <QueryClientProvider client={queryClient}>
            <ToastContainer />
            <FetchTopQuotes />
        </QueryClientProvider>
    );
};
