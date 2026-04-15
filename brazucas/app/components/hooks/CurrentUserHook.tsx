import { useEffect, useState } from "react";
import axios from "axios";

export const useCurrentUser = () => {
    // This is the place to set the user state, and to fetch the user data from the server
    const [user, setUser] = useState<any | null>(null);

    // constructor of the hook
    useEffect(() => {
        (async () => {
            const response = await axios.get("/api/current-user");
            setUser(response.data);
        })();
    }, []);

    return user;
};
