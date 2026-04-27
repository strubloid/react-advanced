export type QuoteType = {
    id: string;
    quote: string;
    author: string;
};

export type QuoteResponse = {
    quotes: QuoteType[];
};
