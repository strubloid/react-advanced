export const LargeBookListItems = ({ book }) => {
    // Destructuring the variables from the book object
    const { title, pages, author, price } = book;

    return (
        <>
            <h2>
                {title} pgs({pages})
            </h2>
            <p>Author: {author}</p>
            <h2>Price: {price}</h2>
        </>
    );
};
