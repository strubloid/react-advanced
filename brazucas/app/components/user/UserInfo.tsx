import type { UserType } from "@/app/data/Users";

export const UserInfo = ({ user }: { user: UserType | null }) => {
    // Destructuring the variables from the user object
    const { name, age, country, books } = user || {};

    return user ? (
        <>
            <h1>User Info</h1>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Country: {country}</p>
            <h2>Books:</h2>
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
