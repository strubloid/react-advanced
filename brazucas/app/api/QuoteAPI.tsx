import API, { AbortableConfig } from "@app/api/Axios";
import { BasicValidation } from "../services/BasicValidation";
import { QuoteResponse } from "../types/QuoteType";

const URLS = {
    topQuotes: "top_quotes",
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
