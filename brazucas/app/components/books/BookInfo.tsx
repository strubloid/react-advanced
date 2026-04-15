import type { BookType } from "@/app/data/Books";
import { useResource } from "../hooks/ResourceHook";

export const BookInfo = ({ bookId }: { bookId: number }) => {

    // loading by the resource hook the book data from the server
    const book = useResource("/api/books/" + bookId);

    // Destructuring the variables from the book object
    const { title, pages, author, price } = book || ({} as BookType);

    return book ? (
        <>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>Author: {author}</p>
            <p>Pages: {pages}</p>
        </>
    ) : (
        <h1>Loading ...</h1>
    );
};
