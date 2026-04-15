import type { UserType } from "@/app/data/Users";
import { useUser } from "../hooks/UserHook";
import { useResource } from "../hooks/ResourceHook";

export const UserInfo = ({ userId }: { userId: number }) => {

    // we load the user data from the hook
    const user = useResource("/api/users/" + userId);

    // Destructuring the variables from the user object
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Country: {country}</p>
            <p>&nbsp;</p>
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
