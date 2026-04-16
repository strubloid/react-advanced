"use client";
import { useState, useEffect, ComponentType } from "react";
import axios from "axios";
import { UserType } from "@/app/data/Users";

type WithUserProps = {
    user: UserType | null;
    userId: number;
};

/**
 * This is a simple HOC that will include user information as a prop for a component.
 * It can be used to provide user data to a component without passing it explicitly.
 * @param Component The component that will receive the user information.
 * @returns A new component that includes user information as a prop.
 */
export const includeUser = <P extends object>(Component: ComponentType<P>, userId: number) => {
    const WithUser = (props: Omit<P, keyof WithUserProps>) => {
        // user to add
        const [user, setUser] = useState<UserType | null>(null);

        // fethcing the data from the server
        useEffect(() => {
            (async () => {
                const response = await axios.get(`/api/users/${userId}`);
                setUser(response.data);
            })();
        }, []);

        const InjectedComponent = Component as ComponentType<Omit<P, keyof WithUserProps> & WithUserProps>;
        return <InjectedComponent {...props} user={user} userId={userId} />;
    };

    return WithUser;
};
