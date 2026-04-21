import  API  from "@app/api/Axios";
import { BasicValidation } from "../services/BasicValidation";

const URLS = {
    fetchUsersUrl: "users",
};

export const fetchUsers = async () => {
    try {

        // loading the response from the API using the get method of the API object,
        // passing the URL defined in the URLS object
        const response = await API.get(
            URLS.fetchUsersUrl, {
                baseURL: "https://jsonplaceholder.typicode.com"
            }
        );

        // loading the basic axios validations
        BasicValidation.axiosValidate(response, URLS.fetchUsersUrl);

        return response.data;

    } catch (error) {
        console.error("Error fetching users: ", error);
        throw error;
    }
}
