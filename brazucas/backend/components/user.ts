import { UserType } from "../../app/data/Users";
import { Router } from "express";

const router = Router();

const currentUser: UserType = {
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

// First test how to get the current user
router.get("/current-user", (req, res) => res.json(currentUser));

// Getting a user by it's own ID
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    res.json(users.find((user) => user.id === Number(id)));
});

// Getting all users
router.get("/users", (req, res) => res.json(users));

// Editing a user by it's own ID
router.post("/users/:id", (req, res) => {
    const { id } = req.params;
    const { user: editedUser } = req.body;
    users = users.map((user) => {
        return user.id === Number(id) ? editedUser : user;
    });

    const foundUser = users.find(({ id: userId }) => userId === Number(id));
    console.log("Edited user:", foundUser);

    res.json(foundUser);
});

export default router;
