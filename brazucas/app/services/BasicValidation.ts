import { AxiosResponse } from "axios";

/**
 * This will be responsible to perform basic validations thoughout the whole app
 * it will be checking for the default bare minimum of a response
 */
export class BasicValidation {
    /**
     * We will be able to validate any kind of axios response.
     * @param response - the axios response to be validated
     * @param endpoint - the endpoint from which the response was fetched
     */
    static axiosValidate(response: AxiosResponse, endpoint: string): void {
        // we check the response status, if it is not 200 we throw an error
        if (response.status !== 200) {
            throw new Error(`Failed to fetch data from ${endpoint}`);
        }

        // we check if the response data is not empty, if it is we throw an error
        if (!response.data) {
            throw new Error(`Data from ${endpoint} is empty, or does not exist`);
        }

        // we check if the response data is a json object, if it is not we throw an error
        if (typeof response.data !== "object") {
            throw new Error(`Data from ${endpoint} is not a valid JSON object`);
        }
    }

    /**
     * Checks whether a value is considered empty, covering all common cases:
     *
     * - null / undefined
     * - NaN or non-finite numbers (Infinity, -Infinity)
     * - empty string or whitespace-only string
     * - empty array  ([])
     * - empty object ({})
     * - empty Map / Set
     * - boolean `false` is NOT considered empty (it is a valid falsy value)
     * - number `0` is NOT considered empty (it is a valid falsy value)
     *
     * @param value - the value to check
     * @returns true if the value is considered empty, false otherwise
     */
    static isEmpty(value: unknown): boolean {
        // null or undefined
        if (value === null || value === undefined) {
            return true;
        }

        // number: NaN or non-finite (Infinity, -Infinity)
        if (typeof value === "number") {
            return isNaN(value) || !isFinite(value);
        }

        // string: empty or whitespace-only
        if (typeof value === "string") {
            return value.trim().length === 0;
        }

        // array: no elements
        if (Array.isArray(value)) {
            return value.length === 0;
        }

        // Map or Set: no entries
        if (value instanceof Map || value instanceof Set) {
            return value.size === 0;
        }

        // plain object: no own enumerable keys
        if (typeof value === "object") {
            return Object.keys(value as object).length === 0;
        }

        return false;
    }

    /**
     * This will be responsible to check if the data is an object,
     * if it is not an object or if it is null, it will return false, 
     * otherwise it will return true.
     * @param data - the data to be checked
     * @returns true if the data is an object and not null, false otherwise
     */
    static isObject = ({data}: {data: any}) => typeof data === "object" && data !== null;


}
