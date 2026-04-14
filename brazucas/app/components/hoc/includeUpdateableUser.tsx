"use client";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { UserType } from "@/app/data/Users";
import { BasicValidation } from "@/app/services/BasicValidation";

/**
 * This is a simple HOC that will include user information as a prop for a component.
 * It can be used to provide user data to a component without passing it explicitly.
 * @param Component The component that will receive the user information.
 * @returns A new component that includes user information as a prop.
 */
export const includeUpdateableUser = (Component: any, userId: number) => {
    return (props: any) => {
        // initial user state, to be used for comparison and to avoid unnecessary updates
        const [initialUser, setInitialUser] = useState<UserType | null>(null);

        // user to add
        const [user, setUser] = useState<UserType | null>(null);

        // fethcing the data from the server
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/api/users/${userId}`);
                setInitialUser(response.data);
                setUser(response.data);
            })();
        }, []);

        // this function will be used to update the user state, and to compare it
        // with the initial user state to avoid unnecessary updates
        const onChangeUser = (updates: UserType) => {
            setUser({ ...user, ...updates });
        };

        const onPostUser = async () => {
            const endpoint = `/api/users/${userId}`;
            // loading the request for the user
            const response = await axios.post(endpoint, user);

            // validating the response from the server, if it is not ok we throw an error
            BasicValidation.axiosValidate(response, endpoint);

            // if the response is ok, we update the initial user state with the new user data
            setInitialUser(user);

            // we can update the user
            setUser(user);
        };

        // this function will be used to reset the user state to the initial user state
        const onResetUser = () => {
            setUser(initialUser);
        };

        return <Component {...props} user={user} onChangeUser={onChangeUser} onPostUser={onPostUser} onResetUser={onResetUser} />;
    };
};
