'use client';

import { didAbort } from "@/app/api/Axios";
import { searchMeals } from "@/app/api/MealAPI";
import { useRef, useState, useCallback } from "react";
import { Meal } from "@/app/types/MealType";

// loading the toastify library to show the error messages in a toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// type for the abort ref that holds the cancel function
type AbortRef = { abort?: () => void };

/**
 *  Custom hook to fetch the meals from the API, using the searchMeals function and handling the abort of the previous request
 * @returns an object with the meals and the fetchMeals function
 * @description this hook is used to fetch the meals from the API, using the searchMeals function and handling the abort of the previous request.
 * It also shows a toast with the error message in case of an error.
 */
export const useFetchMeals = () => {

    // state to hold the meals data
    const [meals, setMeals] = useState<Meal[]>([]);

    // ref to hold the abort function of the previous request
    const abortRef = useRef<AbortRef>({});

    // function to handle the errors of the fetchMeals function, showing a toast with the error message
    const handleQuoteError = useCallback((error: unknown) => {
        if (didAbort(error)){
            // request aborted
            toast.error("Request aborted");
        } else {
            // normal errors
            toast.error("Error fetching meals");
        }
    }, []);

    // function to fetch the meals from the API, using the searchMeals function and handling the abort of the previous request
    const fetchMeals = useCallback(async (query: string) => {

        try {

            // aborting the previous request if it exists
            abortRef?.current?.abort?.();

            // fetching the meals using the searchMeals function
            const meals = await searchMeals(query, {
                abort : (abort: () => void) => (abortRef.current.abort = abort)
            });

            // setting the meals in the state
            setMeals(meals ?? []);

        } catch (error) {
            console.error(error);
            handleQuoteError(error);
        }
    }, [handleQuoteError]);

    return {
        meals,
        fetchMeals
    };

}
