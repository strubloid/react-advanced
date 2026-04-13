"use client";
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
export const DataSource = ({ getData, ResourceName, children }: { getData: () => Promise<any>; ResourceName: string; children: React.ReactNode }) => {
    // This is the place to set the resource state, and to fetch the resource data from the server
    const [resource, setResource] = useState<any | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data);
        })();
    }, [getData]);

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
