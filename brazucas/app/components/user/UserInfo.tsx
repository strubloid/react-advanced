import type { UserType } from "@/app/data/Users";
import { useUser } from "../hooks/UserHook";
import { useDataSource } from "../hooks/DataSourceHook";
import axios from "axios";
import { useCallback } from "react";



export const UserInfo = ({ userId }: { userId: number }) => {
    console.log("i am rendering")
    // we load the user data from the hook
    // const user = useResource("/api/users/" + userId);

    const fetchFromServer = (resourceUrl: string) => async () => {
        const response = await axios.get(resourceUrl);
        return response.data;
    }
    
    /**
     * Fetches data from local storage if available, otherwise fetches from server 
     * and stores it in local storage.
     * @param resourceUrl The URL of the resource to fetch.
     * @returns The fetched data.
     */
    const getDataFromLocalStorage = (resourceUrl: string) => async () => {
        return localStorage.getItem(resourceUrl);
    }

    // to avoid this from render all the time 
    // const fetchUser = fetchFromServer("/api/users/" + userId);
    const fetchUser = useCallback(fetchFromServer("/api/users/" + userId), [userId]);

    // loading user from the useDataSource hook
    const user = useDataSource(fetchUser);

    // loading message from local storage using the useDataSource hook
    const message = useDataSource(getDataFromLocalStorage("test"))

    // Destructuring the variables from the user object
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Country: {country}</p>
            <p>&nbsp;</p>
            <p>Message from local storage: {message}</p>
            <h2>Books</h2>
            <ul>
                {books?.map((book: string) => {
                    return <li key={`${book}-${name}-book`}>{book}</li>;
                })}
            </ul>
        </>
    ) : (
        <h1>Loading ...</h1>
    );
};
