import React, { useState, useEffect } from "react";

/**
 * This should be a generic resource loader, that can be used to load any resource from the server,
 * and pass it to the component that called it.
 * @param getData - a function that fetches the resource data from the server
 * @param render - a function that receives the resource data and returns a React component to render it
 * @returns  a React component that will load and display the resource data
 */

export const DataSourceRender = ({ getData, render }: { getData: () => Promise<any>; render: (resource: any) => React.ReactNode }) => {
    // This is the place to set the resource state, and to fetch the resource data from the server
    const [resource, setResource] = useState<any | null>(null);

    useEffect(() => {
        (async () => {
            const data = await getData();
            setResource(data);
        })();
    }, [getData]);

    return render(resource);
};
