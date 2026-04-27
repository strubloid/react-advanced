import  API, { AbortableConfig }  from "@app/api/Axios";
import { Meal, MealResponse } from "@app/types/MealType";
import { BasicValidation } from "@app/services/BasicValidation";
const URLS = {
    getMeal: "search.php",
};

export const searchMeals = async (query: string, config?: AbortableConfig): Promise<Meal[]> => {
    try {

        // loading the response from the API using the get method of the API object,
        // passing the URL defined in the URLS object
        const response = await API.get<MealResponse>(
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

        return response?.data.meals ?? [];

    } catch (error) {
        console.error("Error fetching meals: ", error);
        throw error;
    }
}
