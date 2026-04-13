"use client";
import { UserType } from "@/app/data/Users";
import React from "react";
import { useState, useEffect } from "react";

// This is the request type for the currentUserLoader hook
type UserChild = React.ReactElement<{ user: UserType | null }>;

export const CurrentUserLoader = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    /**
     * This will be responsible for fetching the user data from the server.
     * and will return the user data to the component that called it.
     * @returns
     */
    const fetchUserData = async () => {
        // loading the data from the server
        let userData = await fetch("/api/current-user", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        // basic validation to check if the response is ok, if not we throw an error
        if (!userData.ok) {
            throw new Error("Failed to fetch user data");
        }

        let user: UserType = await userData.json();

        // basic validation to check if the user data is not empty, if it is we throw an error
        if (!user) {
            throw new Error("User data is empty, or does not exist");
        }

        return user;
    };

    // Constructor to load the user data when the component is mounted
    useEffect(() => {
        (async () => {
            const user = await fetchUserData();
            console.log(user);
            setUser(user);
        })();
    }, []);

    return (
        <>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as UserChild, { user });
                }

                return child;
            })}
        </>
    );
};
