import express from "express";
import userRouter from "./components/user";
import booksRouter from "./components/books";

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(userRouter);
app.use(booksRouter);

const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
