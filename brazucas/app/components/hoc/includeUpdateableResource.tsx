"use client";
import { useState, useEffect, ComponentType } from "react";
import axios, { Axios } from "axios";
import { UserType } from "@/app/data/Users";
import { BasicValidation } from "@/app/services/BasicValidation";

// extra function to capitalize the first letter of a string, used for the resource name in the onPost function
const toCapital = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const includeUpdateableResource = (Component: ComponentType<any>, resourceUrl: string, resourceName: string) => {
    const HOC = (props: unknown) => {
        // initial resource state, to be used for comparison and to avoid unnecessary updates
        const [initialResource, setInitialResource] = useState<UserType | null>(null);

        // resource to add
        const [resource, setResource] = useState<unknown | null>(null);

        // fetching the data from the server
        useEffect(() => {
            (async () => {
                const response = await axios.get(resourceUrl);
                console.log("Fetched resource:", response.data);
                setInitialResource(response.data);
                setResource(response.data);
            })();
        }, []);

        /**
         * This function will be used to update the resource state with the new resource data, when the user
         * makes changes to the resource data in the component that is using this HOC. It will be called by the
         * component that is using this HOC, and it will receive the new resource data as a parameter, and it will
         * update the resource state accordingly.
         * @param updates
         */
        const onChange = (updates: UserType) => {
            console.log("On Change:");
            setResource({ ...(resource as object), ...updates });
        };

        /**
         * This function will be used to post the resource data to the server, and to update the initial
         * resource state with the new resource data, if the response from the server is ok. It will also
         * update the resource state with the new resource data, so the component that is using this HOC
         * can update itself with the new resource data.
         */
        const onPost = async () => {
            console.log("On Post");
            // this is the place to post the resource data to the server, and to update the initial
            // resource state with the new resource data
            const response = await axios.post(resourceUrl, { [resourceName]: resource });

            // validating the response from the server, if it is not ok we throw an error
            // BasicValidation.axiosValidate(response, resourceUrl);

            // if the response is ok, we update the initial resource state with the new resource data
            setInitialResource(response.data);

            // we can update the resource
            setResource(response.data);
        };

        /**
         * This function will be used to reset the resource state to the initial resource state
         */
        const onReset = () => {
            console.log("On Reset");
            setResource(initialResource);
        };

        const resourceProps = {
            [resourceName]: resource,
            [`onChange${toCapital(resourceName)}`]: onChange,
            [`onPost${toCapital(resourceName)}`]: onPost,
            [`onReset${toCapital(resourceName)}`]: onReset,
        };
        console.log(resourceProps);

        return <Component {...props} {...resourceProps} />;
    };
};
