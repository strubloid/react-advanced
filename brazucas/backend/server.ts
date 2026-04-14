import { BookType } from "@/app/data/Books";
import { UserType } from "@/app/data/Users";
import express from "express";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let currentUser: UserType = {
    id: 1,
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
};

let users: UserType[] = [
    {
        id: 1,
        name: "Sarah Waters",
        age: 55,
        country: "United Kingdom",
        books: ["Fingersmith", "The Night Watch"],
    },
    {
        id: 2,
        name: "Haruki Murakami",
        age: 71,
        country: "Japan",
        books: ["Norwegian Wood", "Kafka on the Shore"],
    },
    {
        id: 3,
        name: "Chimamanda Ngozi Adichie",
        age: 43,
        country: "Nigeria",
        books: ["Half of a Yellow Sun", "Americanah"],
    },
];
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

// First test how to get the current user
app.get("/current-user", (req, res) => res.json(currentUser));

// Getting a user by it's own ID
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json(users.find((user) => user.id === Number(id)));
});

// Getting all users
app.get("/users", (req, res) => res.json(users));

// Editing a user by it's own ID
app.post("/users/:id", (req, res) => {
    const { id } = req.params;
    const { user: editedUser } = req.body;
    users = users.map((user) => {
        return user.id === Number(id) ? editedUser : user;
    });

    const foundUser = users.find(({ id: userId }) => userId === Number(id));
    console.log("Edited user:", foundUser);

    res.json(foundUser);
});

// Getting all books
app.get("/books", (req, res) => res.json(books));

// Getting a book by it's own ID
app.get("/books/:id", (req, res) => {
    const { id } = req.params;

    let bookCollection = books.find((book) => book.id === Number(id));

    // in case things arent able to find the book, we return a 404 status code with a message
    if (!bookCollection) {
        res.status(404).json({ message: "Book not found" });
        return;
    }

    res.json(bookCollection);
});

// Editing a book by it's own ID
app.post("/books/:id", (req, res) => {
    const { id } = req.params;
    const { book: editedBook } = req.body;
    books = books.map((book) => {
        return book.id === Number(id) ? editedBook : book;
    });

    const foundBook = books.find(({ id: bookId }) => bookId === Number(id));
    console.log("Edited book:", foundBook);

    res.json(foundBook);
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
