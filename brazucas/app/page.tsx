"use client";
import { includeUser } from "./components/hoc/includeUser";
import { logProps } from "./components/hoc/logProps";
import { UserInfo } from "./components/user/UserInfo";
import { UserInfoForm } from "./components/forms/UserForm";
import { BookForm } from "./components/forms/BookForm";
import { BookInfo } from "./components/books/BookInfo";
import { SplitScreen } from "./components/split-screen/SplitScreen";
import { UncontrolledForm } from "./components/forms/UncontrolledForm";
import { ControlledForm } from "./components/forms/ControlledForm";
import { LeftSide } from "./components/layout/LeftSide";
import { RightSide } from "./components/layout/RightSide";
import { useState } from "react";
import { users } from "./data/Users";
import { books } from "./data/Books";
import { NestedObject } from "./data/NestedObject";
import { RecursiveComponent } from "./components/recursion/Recursive";
import { GreenSmallButton, RedButton } from "./components/composition/Composition";

// this will be adding the user info as a prop for log the props of the component.
const UserInfoWrapper = logProps(UserInfo);

const UserAddedToInfoWrapper = includeUser(UserInfoWrapper, 1);

export default function Home() {

    let [userId, setUserId] = useState(1);
    let [bookId, setBookId] = useState(1);

    // limit of each resource
    const maxUsers = users.length;
    const maxBooks = books.length;

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

            <h1>Recursive Component</h1>
            

            <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSide>
                    <h1>Recursive left</h1>
                    <RecursiveComponent data={NestedObject} />
                </LeftSide>
                <RightSide>
                    <h1>Recursive right</h1>
                    <RedButton size="large" text="This is a red button"  />
                    <GreenSmallButton text="This is a green small button" />
                </RightSide>
            </SplitScreen>


            {/* <h1>Custom Hooks</h1>
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
            </SplitScreen> */}
            
            {/* <UserInfo userId={2}/> */}
            {/* <h1>HOC: Book example</h1>
            <BookForm /> */}

            {/* <h1>HOC: Including the user with form</h1>
            <UserInfoForm /> */}

            {/* <h1>HOC: Including the user</h1>
            <UserAddedToInfoWrapper /> */}
        </>
    );
}
