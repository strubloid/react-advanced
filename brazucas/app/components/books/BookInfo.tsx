"use client";
import type { BookType } from "@/app/data/Books";

export const BookInfo = ({ book }: { book: BookType | null }) => {
    // Destructuring the variables from the book object
    const { title, pages, author, price } = book || ({} as BookType);

    return book ? (
        <>
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>Author: {author}</p>
            <p>Pages: {pages}</p>
        </>
    ) : (
        <h1>Loading ...</h1>
    );
};
