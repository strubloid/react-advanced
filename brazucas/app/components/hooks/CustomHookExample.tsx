import { useState } from "react";
import { BookInfo } from "../books/BookInfo";
import { LeftSide } from "../layout/LeftSide";
import { RightSide } from "../layout/RightSide";
import { SplitScreen } from "../split-screen/SplitScreen";
import { UserInfo } from "../user/UserInfo";
import { users } from "@/app/data/Users";
import { books } from "@/app/data/Books";

export const CustomHookExample = () => {

    // limit of each resource
    const maxUsers = users.length;
    const maxBooks = books.length;

    // this will be responsible to loop any resource, if the element
    const [userId, setUserId] = useState(1);
    const [bookId, setBookId] = useState(1);

    /**
     * This will be responsible to loop any resource, if the element
     * to loop is bigger than the total, it will return to the first element.
     * @param elementToLoop
     * @param totalSize
     */
    const loopElements = (elementToLoop: number, totalSize: number) => {
        // wraps back to 1 when elementToLoop exceeds totalSize
        const next = elementToLoop % totalSize;

        // if next is 0, it means we have reached the end of the list, so we return 1
        return next + 1;
    };

    return (
        <>
            <h1>Custom Hooks</h1>
            <p>&nbsp;</p>
            <p>UID: {userId}</p>
            <p>BID: {bookId}</p>
            <button onClick={() => setUserId(loopElements(userId, maxUsers))}>+ UID</button>
            <button onClick={() => setBookId(loopElements(bookId, maxBooks))}>+ BID</button>
            <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSide>
                    <h1>User Info</h1>
                    <p>&nbsp;</p>
                    <UserInfo userId={userId}/>
                </LeftSide>
                <RightSide>
                    <h1>Book Info</h1>
                    <p>&nbsp;</p>
                    <BookInfo bookId={bookId}/>
                </RightSide>
            </SplitScreen>
        </>
    );
};
