import type { BookType } from "@/app/data/Books";
import type { AuthorType } from "@/app/data/Authors";

export const AuthorInfo = ({ author }: { author: AuthorType }) => {
    
    // Destructuring the variables from the author object
    const { name, age, country, books } = author || ({} as AuthorType);

    return author ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age} years</p>
            <p>Country: {country}</p>
            <h2>Books:</h2>
            <ul>
                {books.map((book: string) => {
                    return <li key={`${book}-${name}-book`}>{book}</li>;
                })}
            </ul>
        </>
    ) : (
        <h1>Loading ...</h1>
    );
};
