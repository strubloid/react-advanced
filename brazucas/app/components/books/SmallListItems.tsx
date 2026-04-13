import { BookType } from "@/app/data/Books";

export const SmallBookListItems = ({ book }: { book: BookType }) => {
    // Destructuring the variables from the book object
    const { title, price } = book;

    return (
        <p>
            Title: {title}, Price: {price}
        </p>
    );
};
