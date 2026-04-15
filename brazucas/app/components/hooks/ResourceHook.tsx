import { useEffect, useState } from "react";
import axios from "axios";

/**
 * This should be a generic resource loader, that can be used to load any resource 
 * from the server, and pass it to the component that called it.
 * @param resourceUrl The URL of the resource to fetch
 * @returns The fetched resource
 */
export const useResource = (resourceUrl: string) => {
    
    // Place to set the resource state, and to fetch the resource data from the server
    const [resource, setResource] = useState<any | null>(null);

    // constructor of the hook
    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);
            setResource(response.data);
        })();
    }, [resourceUrl]);

    return resource;
};
