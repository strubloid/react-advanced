// import { includeUpdateableUser } from "../hoc/includeUpdateableUser";
import { BookType } from "@/app/data/Books";
import { includeUpdateableResource } from "../hoc/includeUpdateableResource";
import { UserType } from "@/app/data/Users";

type BookFormProps = {
    book: BookType;
    onChangeBook: (book: Partial<BookType>) => void;
    onPostBook: () => void;
    onResetBook: () => void;
};
export const BookForm = includeUpdateableResource(
    ({ book, onChangeBook, onPostBook, onResetBook }: BookFormProps) => {
        // destructuring the book object to get the id, title and pages, if the book is null we set them to empty strings
        const { id, title, price } = book || {};

        return book ? (
            <>
                <input type="hidden" value={id} />
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => onChangeBook({ title: e.target.value })} />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => onChangeBook({ price: Number(e.target.value) })} />
                </label>
                <button onClick={onResetBook}>Reset</button>
                <button onClick={onPostBook}>Save</button>
            </>
        ) : (
            <h3>Loading book data...</h3>
        );
    },
    "/api/books/1",
    "book",
);
