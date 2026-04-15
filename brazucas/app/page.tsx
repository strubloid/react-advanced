"use client";
import { includeUser } from "./components/hoc/includeUser";
import { logProps } from "./components/hoc/logProps";
import { UserInfo } from "./components/user/UserInfo";
import { UserInfoForm } from "./components/forms/UserForm";
import { BookForm } from "./components/forms/BookForm";

// this will be adding the user info as a prop for log the props of the component.
const UserInfoWrapper = logProps(UserInfo);

const UserAddedToInfoWrapper = includeUser(UserInfoWrapper, 1);

export default function Home() {
    return (
        <>
            <h1>Custom Hooks</h1>
            <UserInfo userId={1}/>
            
            <p>&nbsp;</p>
            <UserInfo userId={2}/>
            {/* <h1>HOC: Book example</h1>
            <BookForm /> */}

            {/* <h1>HOC: Including the user with form</h1>
            <UserInfoForm /> */}

            {/* <h1>HOC: Including the user</h1>
            <UserAddedToInfoWrapper /> */}
        </>
    );
}
