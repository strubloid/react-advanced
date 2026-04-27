import API, { AbortableConfig } from "@app/api/Axios";
import { BasicValidation } from "../services/BasicValidation";
import { QuotePageResponse, QuoteResponse, QuoteType } from "../types/QuoteType";

const URLS = {
    topQuotes: "top_quotes",
    postQuote: "add_quote",
    quotes: "",
};

/**
 * This will fetch the top quotes from the server, and return them as an array of QuoteType.
 * It will also handle any errors that may occur during the fetching process, and it will
 * throw an error if the response from the server is not ok.
 * @param config - the config object that can be passed to the API request, to make it
 * abortable or to add any other config options that we want to use in the API request
 * @returns an array of QuoteType, that will be the top quotes from the server
 */
export const fetchTopQuotes = async (config?: AbortableConfig) => {
    try {

        // loading the response from the API using the get method of the API object,
        const response = await API.get<QuoteResponse>(URLS.topQuotes, { ...config });

        // loading the basic axios validations
        BasicValidation.axiosValidate(response, URLS.topQuotes);

        return response?.data.quotes ?? [];

    } catch (error) {
        console.error("Error fetching top quotes: ", error);
        throw error;
    }
};

/**
 *
 * @param quote
 * @returns
 */
export const postQuote = async ({ quote, author }: { quote: string; author: string }) => {
    try {

        // posting to the server API
        const response = await API.post<QuoteType>(URLS.postQuote, { quote, author });

        // loading the basic axios validations
        BasicValidation.axiosValidatePost(response, URLS.postQuote);

        return response.data;
    } catch (error) {
        console.error("Error posting quote: ", error);
        throw error;
    }
};

/**
 *  This will reset the quotes on the server, and return the response from the server, that will be the new quotes
 *  data after the reset.
 * @returns the new quotes data after the reset, that will be an array of QuoteType, or an error if the response
 * from the server is not ok
 */
export const resetQuotes = async () => {
    try {

        // resetting the quotes on the server
        const response = await API.post("/reset", {});
        // loading the basic axios validations
        BasicValidation.axiosValidatePost(response, "/reset");

        return response.data;
    } catch (error) {
        console.error("Error resetting quotes: ", error);
        throw error;
    }
};

/**
 * This will fetch the quotes by page from the server, and return them as an array of QuoteType.
 * It will also handle any errors that may occur during the fetching process, and it will
 * throw an error if the response from the server is not ok.
 * @param page - the page number that we want to fetch the quotes from, it will be passed as a query param in the API request to the server,
 * and the server will return the quotes for that page
 * @returns an array of QuoteType, that will be the quotes for the page that we want to fetch from the server
 */
export const fetchQuotesByPage = async (page: number) => {
    try {

        // fetching quotes by page from the server API
        const response = await API.get<QuotePageResponse>(URLS.quotes, { params: { page } });

        // loading the basic axios validations
        BasicValidation.axiosValidate(response, URLS.quotes);

        return response.data;

    } catch (error) {
        console.error("Error fetching quotes by page: ", error);
        throw error;
    }

}
