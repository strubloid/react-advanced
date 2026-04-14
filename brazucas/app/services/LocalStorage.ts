import { AxiosResponse } from "axios";
import { BasicValidation } from "./BasicValidation";

/**
 * This will be responsible for loading data from the local storage.
 */
export class LocalStorage {
    /**
     * This will load the data from the local storage.
     * @param key - the key of the data to be loaded from the local storage
     * @returns the data from the local storage
     */
    static load = (key: string) => {
        // we check if the key is empty, if it is we return null
        if (BasicValidation.isEmpty(key)) {
            return null;
        }

        return localStorage.getItem(key);
    };
}
