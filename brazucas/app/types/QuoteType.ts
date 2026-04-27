export type QuoteType = {
    id: string;
    quote: string;
    author: string;
};

export type QuoteFormType = Omit<QuoteType, "id">;

export type QuoteResponse = {
    quotes: QuoteType[];
};

export type QuotePageResponse = {
    quotes: QuoteType[];
    hasMore: boolean;
};

export type QuoteCursorResponse = {
    quotes: QuoteType[];
    nextCursor: number | null;
};
