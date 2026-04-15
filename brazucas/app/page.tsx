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

// this will be adding the user info as a prop for log the props of the component.
const UserInfoWrapper = logProps(UserInfo);

const UserAddedToInfoWrapper = includeUser(UserInfoWrapper, 1);

export default function Home() {
    return (
        <>
            <h1>Custom Hooks</h1>
            <p>&nbsp;</p>
            <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSide>
                    <h1>User Info</h1>
                    <p>&nbsp;</p>
                    <UserInfo userId={2}/>
                </LeftSide>
                <RightSide>
                    <h1>Book Info</h1>
                    <p>&nbsp;</p>
                    <BookInfo bookId={2}/>        
                </RightSide>
            </SplitScreen>
            
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
