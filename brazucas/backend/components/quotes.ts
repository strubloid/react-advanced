import { Router } from "express";
import { nanoid } from "nanoid";
import { quotes } from "../../app/data/Quotes";
import { quotesOriginal } from "../../app/data/QuotesOriginal";

const router = Router();

/**
 * Sleep for a specified amount of time.
 * @param time Time in milliseconds to sleep. Default is 1000ms.
 * @returns A promise that resolves after the specified time.
 */
const sleep = (time = 1000) =>
    new Promise((resolve) => setTimeout(resolve, time));

/**
 * This will return our quotes data
 * @returns
 */
const readQuotes = async () => {
    return quotes;
};

const addQuote = (quote: string, author: string) => {
    const id = nanoid();
    quotes.quotes.unshift({ id, quote, author });
    return id;
};

const getQuotesByPage = async (page: number, limit: number) => {
    const offset = page * limit;
    const endIndex = offset + limit;
    const quotesData = await readQuotes();
    const quotes = quotesData.quotes.slice(offset, endIndex);
    return {
        quotes,
        hasMore: endIndex < quotesData.quotes.length - 1,
    };
};

const getQuotesByCursor = async (cursor: number, limit: number) => {
    const endIndex = cursor + limit;
    const quotesData = await readQuotes();
    const quotes = quotesData.quotes.slice(cursor, endIndex);

    return {
        quotes,
        nextCursor: endIndex < quotesData.quotes.length - 1 ? endIndex + 1 : null,
    };
};

router.get("/top_quotes", async (request, response) => {
    try {
        await sleep();
        const quotesData = await readQuotes();
        response.json({
            quotes: quotesData.quotes.slice(0, 5),
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/", async (request, response) => {
    try {
        const { page, cursor } = request.query;
        if (!page && !cursor) {
            throw new Error(
                'Missing parameters. Please provide "page" or "cursor" parameter in the request query.'
            );
        }
        await sleep();

        const limit = 5;

        if (page)
            return response.json(await getQuotesByPage(parseInt(page as string), limit));
        if (cursor)
            return response.json(await getQuotesByCursor(parseInt(cursor as string), limit));
    } catch (error) {
        console.error(error);
        response.status(500).json({
            error: 'Missing parameters("page" or "cursor"). ',
        });
    }
});

router.post("/add_quote", async (request, response) => {
    try {
        console.log("BACKEND!")
        const { quote, author } = request.body;
        if (!quote || !author) {
            response.status(400).send("Please provide author and quote text.");
            return;
        }
        await sleep();
        const id = addQuote(quote, author);
        response.status(201).json({ id });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
});

router.post("/reset", async (request, response) => {
    try {
        await sleep();
        quotes.quotes.length = 0;
        quotes.quotes.push(...quotesOriginal.quotes);
        response.json({ success: true });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
