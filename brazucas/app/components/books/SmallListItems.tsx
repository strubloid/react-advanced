export const SmallBookListItems = ({ book }) => {
    // Destructuring the variables from the book object
    const { title, price } = book;

    return (
        <p>
            Title: {title}, Price: {price}
        </p>
    );
};
