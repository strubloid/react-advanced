import { AxiosResponse } from "axios";
import { BasicValidation } from "./BasicValidation";

/**
 * This will be responsible to perform basic validations thoughout the whole app
 * it will be checking for the default bare minimum of a response
 */
export class BasicString {

    /**
     * This method will be responsible to capitalize the first letter of a string,
     * it will also check if the string is empty and throw an error if it is
     * @param str - the string to be capitalized
     * @returns the string with the first letter capitalized
     */
    static capitalize = (str: string): string => {

        // check if is empty string, if it is we throw an error
        if (BasicValidation.isEmpty(str)) {
            throw new Error("Input must be a non-empty string");
        }
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

}
