import express from "express";
import cors from "cors";
import userRouter from "./components/user";
import booksRouter from "./components/books";
import quotesRouter from "./components/quotes";

// Create an Express application
const app = express();

// Middleware to allow cross-origin requests from the frontend
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
app.use(cors({ origin: FRONTEND_URL }));

// Middleware to parse JSON bodies
app.use(express.json());

// assigning each router into the app
app.use(userRouter);
app.use(booksRouter);
app.use(quotesRouter);

const SERVER_PORT = process.env.NEXT_PUBLIC_BACKEND_PORT || "8080";
app.listen(SERVER_PORT, () => console.log(`Server is listening on port: ${SERVER_PORT}`));
