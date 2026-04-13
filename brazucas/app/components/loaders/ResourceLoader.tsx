"use client";
import { UserType } from "@/app/data/Users";
import React, { useState, useEffect } from "react";
import axios from "axios";

/**
 * This should be a generic resource loader, that can be used to load any resource from the server,
 * and pass it to the component that called it.
 * @param resourceUrl - the url to fetch the resource from the server
 * @param ResourceName - the name of the resource, used for error handling and logging
 * @param children - the component that will receive the resource data as a prop
 * @returns a React component that will load and display the resource data
 */
export const ResourceLoader = ({ resourceUrl, ResourceName, children }: { resourceUrl: string; ResourceName: string; children: React.ReactNode }) => {
    // This is the place to set the resource state, and to fetch the resource data from the server
    const [resource, setResource] = useState<UserType | null>(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get(resourceUrl);

            // checking if the response is ok, if not we throw an error
            if (response.status !== 200) {
                throw new Error(`Failed to fetch ${ResourceName} data`);
            }

            const resourceData = await response.data;
            console.log(resourceData);

            // checking if the data isnt empty
            if (!resourceData) {
                throw new Error(`${ResourceName} data is empty, or does not exist`);
            }

            setResource(resourceData);
        })();
    }, [resourceUrl]);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [ResourceName]: resource });
                }
                return child;
            })}
        </>
    );
};
