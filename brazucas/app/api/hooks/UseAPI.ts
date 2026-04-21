import { useState } from "react";
import { UseApiStatus } from "./UseAPIStatus";
import { LOADING, SUCCESS, ERROR } from "@/app/constants/APIStatus";

export const UseAPI = (fn : (...args: unknown[]) => Promise<unknown>, config: { initialData?: unknown } = {}) => {

    // loading the initialData from the config object, if it exists
    const { initialData } = config;

    // data state to store the response data from the API request
    const [data, setData] = useState<unknown>(initialData || null);

    // error state to store any error that may occur during the API request
    const [error, setError] = useState<unknown>(null);

    // we use the UseApiStatus hook to manage the status of the API request, it will return the current status and a function to update the status
    const {status, setStatus, ...normalizedStatuses} = UseApiStatus();

    /**
     * This is the function that will be called to execute the API request, it will be
     * responsible to set the loading state to true when the request is being made,
     * set the response data
     * @param args - the arguments that will be passed to the API function, it can be any
     * type of arguments depending on the API function being called
     * @returns  An object containing the response data, any error that may occur,
     * and the current status of the API request
     */
    const exec = async (...args: unknown[]) => {
        try {

            // we start adding the status LOADING
            setStatus(LOADING);

            // we load the function with arguments in it
            const response = await fn(...args);

            // we set the response data in the data state
            setData(response);

            // we set the status to SUCCESS to indicate that the API request has finished successfully
            setStatus(SUCCESS);

            return {
                data,
                error: null,
            }
        } catch (error) {

            // we set the error in the error state
            setError(error);

            // we set the status to be ERROR
            setStatus(ERROR);

            return {
                data: null,
                error,
            }
        }
    }

    return {
        data,
        setData,
        status,
        setStatus,
        exec,
        ...normalizedStatuses,
    }

};

