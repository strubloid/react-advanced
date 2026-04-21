import { APIStatysType, DefaultAPIStatus, IDLE } from "@/app/constants/APIStatus";
import { BasicString } from "@/app/services/BasicString";
import { useMemo, useState } from "react";

/**
 * Prepares the status object with boolean flags for each possible status.
 * @param currentStatus - the current status of the API request
 * @returns An object containing boolean flags for each possible status
 */
const prepareStatus = (currentStatus: APIStatysType) => {

    const statuses: Record<string, boolean> = {};

    for (const status of DefaultAPIStatus) {

        // making sure that is capitalized the first letter of the status
        const normalizedStatus = BasicString.capitalize(status);

        // creating a key for the status, for example: isLoading, isSuccess, isError
        const normalizedStatusKey : string = `is${normalizedStatus}`;

        // we set the value of the status key to true if the current status is equal to the status, otherwise we set it to false
        statuses[normalizedStatusKey] = status === currentStatus;

    }

    return statuses;
}

/**
 * This will be responsible to manage the API status throughout the whole app, it will be
 * using the APIStatus constants to set the status of the API request, and it will be
 * returning an object with the current status and the prepared status object with the
 * boolean values for each status, so we can easily check the status of the API request
 * in the components that are using this hook.
 * @param currentStatus - the current status of the API request, it will be set to IDLE by default
 * @returns An object containing the current status, a function to update the status, and boolean flags for each possible status.
 */
export const UseApiStatus = (currentStatus : APIStatysType = IDLE) => {

    // we prepare the status object with the current status
    const [status, setStatus] = useState(currentStatus);

    // we use useMemo to memoize the prepared status object, so it will
    // only be recalculated when the status changes
    const statuses = useMemo(() => prepareStatus(status), [status]);

    return {
        status,
        setStatus,
        ...statuses,
    }

};

