import { JSX } from "react";
import FetchTopQuotes from "../components/quotes/TopQuotes";
import QueryProvider from "../components/providers/QueryProvider";

export const UsingReactQueryExample = (): JSX.Element => {

    return (
        // It is important to wrap the component that uses react-query hooks with the QueryClientProvider,
        // otherwise it will throw an error because it won't be able to find the QueryClient instance in
        // the context
        <QueryProvider>
            <FetchTopQuotes />
        </QueryProvider>
    );
};
