import { useEffect, useState } from "react";
import axios from "axios";

export const useUser = ({ userId }: { userId: number }) => {
    // This is the place to set the user state, and to fetch the user data from the server
    const [user, setUser] = useState<any | null>(null);

    // constructor of the hook
    useEffect(() => {
        (async () => {
            const response = await axios.get(`/api/users/${userId}`);
            setUser(response.data);
        })();
    }, [userId]);

    return user;
};
