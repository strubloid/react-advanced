import  API, { AbortableConfig }  from "@app/api/Axios";
import { BasicValidation } from "../services/BasicValidation";
import { Meal, MealResponse } from "../types/MealType";

const URLS = {
    getMeal: "search.php",
};

export const searchMeals = async (query: string, config?: AbortableConfig): Promise<Meal[]> => {
    try {

        // loading the response from the API using the get method of the API object,
        // passing the URL defined in the URLS object
        const response = await API.get(
            URLS.getMeal, {
                baseURL: "https://www.themealdb.com/api/json/v1/1/",
                params: {
                    s: query
                },
                ...config,
            }
        );

        // loading the basic axios validations
        BasicValidation.axiosValidate(response, URLS.getMeal);

        const data = response.data as MealResponse;
        return data.meals ?? [];

    } catch (error) {
        console.error("Error fetching meals: ", error);
        throw error;
    }
}
