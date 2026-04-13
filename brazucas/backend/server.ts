import { AuthorType } from "@/app/data/Authors";
import { BookType } from "@/app/data/Books";
import express from "express";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

let currentUser = {
    name: "Sarah Waters",
    age: 55,
    country: "United Kingdom",
    books: ["Fingersmith", "The Night Watch"],
};

let autors: AuthorType[] = [];
let books: BookType[] = [];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/autors/:id", (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.json(autors.find((user) => user.id === Number(id)));
});

app.get("/autors", (req, res) => res.json(autors));

app.post("/autors/:id", (req, res) => {
    const { id } = req.params;
    const { user: editedUser } = req.body;

    autors = autors.map((user) => (user.id === Number(id) ? editedUser : user));

    res.json(autors.find((user) => user.id === Number(id)));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
    const { id } = req.params;
    res.json(books.find((book) => book.id === Number(id)));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
