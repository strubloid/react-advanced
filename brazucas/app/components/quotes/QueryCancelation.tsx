import { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchTopQuotes } from '@/app/api/QuoteAPI';
import { toast } from 'react-toastify';
import styled from "styled-components";
import { QuoteType } from '@/app/data/Quotes';

const Container = styled.div`
  padding: 2rem 0;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const CheckboxLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const CheckboxInput = styled.input`
  margin-right: 0.75rem;
`;

const FetchButton = styled.button`
  background-color: #4299e1;
  color: #fff;
  padding: 0.75rem 1rem;
`;

const ErrorMessage = styled.p`
  color: #c53030;
`;

const LoadingMessage = styled.p``;

const QuotesContainer = styled.div`
  max-height: 24rem;
  overflow-y: auto;
  border-top: 1px solid #cbd5e0;
`;

const QuoteBlock = styled.blockquote`
  position: relative;
  padding: 1rem;
  font-size: 1.5rem;
  font-style: italic;
  border-left: 4px solid #718096;
  background-color: #f7fafc;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const QuoteText = styled.p`
  margin-bottom: 1rem;
`;

const CiteContainer = styled.cite`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorText = styled.span`
  margin-bottom: 1px;
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
`;
export const QueryCancelationWithAbortSignal = () => {

    // variable that will be used to trigger the cancelation of the query
    const [shouldAbort, setShouldAbort] = useState(true);

    // loading the query cliente hook to be able to cancel the query
    const queryClient = useQueryClient();

    const {
        data: quotes,
        isSuccess,
        isLoading,
        isError,
        refetch,
    } = useQuery({
        queryKey: ["top-aborted-quotes-abort-controller"],
        queryFn: async ({ signal }: { signal: AbortSignal }) => {

            try {
                const fetchedQuotes : QuoteType[] | undefined = await fetchTopQuotes({ signal });
                return fetchedQuotes;
            } catch (error) {

                // this is the case we should abort the request
                if ((error as { aborted?: boolean }).aborted || signal.aborted) {
                    toast.error("Request aborted");
                    setShouldAbort(true);
                    queryClient.setQueryData(["top-aborted-quotes-abort-controller"], []);
                    return;
                }

                // this is for all the other cases of error
                throw error;
            }
        },
        refetchOnWindowFocus: false,
        enabled: false,
    });

    /**
     * This will be responsible for fetching the quotes, but also for simulating the user changing their mind
     * and wanting to cancel the request after 1 second. In a real application, this could be a button that the
     * user clicks to cancel the request, or it could be a navigation event that triggers the cancelation of the
     * request.
     */
    const onFetchQuotes = () => {

        // this will be the time we will be waiting before check if the user changed their mind and cancel the request
        const reloadTime = 200;

        // first we trigger the fetch of the quotes
        // refetch() bypasses the enabled:false flag, unlike queryClient.refetchQueries() which skips disabled queries in v5
        refetch();

        // simulating the user changing their mind and wanting to cancel the request after 1 second
        setTimeout(() => {
            // for the example of abort, we check 200ms to see if the user changed their mind.
            if (shouldAbort) {
                console.log("Aborting request...");
                queryClient.cancelQueries({ queryKey: ["top-aborted-quotes-abort-controller"] });
            }

        }, reloadTime);

    }

    return (
        <Container>
            <div>
                <Title>Query Cancellation With Abort Controller</Title>
                <div>
                    <CheckboxLabel>
                        <CheckboxInput
                            type="checkbox"
                            checked={shouldAbort}
                            onChange={() => setShouldAbort((checked) => !checked)}
                        />
                Abort
                    </CheckboxLabel>
                </div>
                {isError ? (
                    <ErrorMessage>There was a problem with fetching quotes</ErrorMessage>
                ) : null}
                <div>
                    <FetchButton onClick={onFetchQuotes}>Fetch quotes</FetchButton>
                </div>
                {isLoading ? <LoadingMessage>Fetching quotes</LoadingMessage> : null}
                {isSuccess ? (
                    <QuotesContainer>
                        {quotes?.map((quote) => (
                            <QuoteBlock key={quote.id}>
                                <QuoteText>&quot;{quote.quote}&quot;</QuoteText>
                                <CiteContainer>
                                    <div>
                                        <AuthorText>{quote.author}</AuthorText>
                                    </div>
                                </CiteContainer>
                            </QuoteBlock>
                        ))}
                    </QuotesContainer>
                ) : null}
            </div>
        </Container>
    );
};
