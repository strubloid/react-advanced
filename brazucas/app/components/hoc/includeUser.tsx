"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserType } from "@/app/data/Users";

/**
 * This is a simple HOC that will include user information as a prop for a component.
 * It can be used to provide user data to a component without passing it explicitly.
 * @param Component The component that will receive the user information.
 * @returns A new component that includes user information as a prop.
 */
export const includeUser = (Component: any, userId: number) => {
    return (props: any) => {
        // user to add
        const [user, setUser] = useState<UserType | null>(null);

        // fethcing the data from the server
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/api/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        return <Component {...props} user={user} />;
    };
};
