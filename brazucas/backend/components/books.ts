import { BookType } from "../../app/data/Books";
import { Router } from "express";

const router = Router();

let books: BookType[] = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        pages: 281,
        author: "Harper Lee",
        price: 12.99,
    },
    {
        id: 2,
        title: "The Catcher in the Rye",
        pages: 224,
        author: "J.D. Salinger",
        price: 9.99,
    },
    {
        id: 3,
        title: "The Little Prince",
        pages: 85,
        author: "Antoine de Saint-Exupéry",
        price: 7.99,
    },
];

// Getting all books
router.get("/books", (req, res) => res.json(books));

// Getting a book by it's own ID
router.get("/books/:id", (req, res) => {
    const { id } = req.params;

    const bookCollection = books.find((book) => book.id === Number(id));

    // in case things arent able to find the book, we return a 404 status code with a message
    if (!bookCollection) {
        res.status(404).json({ message: "Book not found" });
        return;
    }

    res.json(bookCollection);
});

// Editing a book by it's own ID
router.post("/books/:id", (req, res) => {
    const { id } = req.params;
    const { book: editedBook } = req.body;
    books = books.map((book) => {
        return book.id === Number(id) ? editedBook : book;
    });

    const foundBook = books.find(({ id: bookId }) => bookId === Number(id));
    console.log("Edited book:", foundBook);

    res.json(foundBook);
});

export default router;
