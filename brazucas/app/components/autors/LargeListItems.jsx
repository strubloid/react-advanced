export const LargeAuthorListItems = ({ author }) => {
    // Destructuring the variables from the author object
    const { name, age, country, books } = author;

    return (
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h2>Books:</h2>
            <ul>
                {books.map((book) => {
                    const bookKey = `${book.id}-${name}-book`;
                    return <li key={bookKey}>{book}</li>;
                })}
            </ul>
        </>
    );
};
