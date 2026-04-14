"use client";
import { includeUser } from "./components/hoc/includeUser";
import { logProps } from "./components/hoc/logProps";
import { UserInfo } from "./components/user/UserInfo";

// this will be adding the user info as a prop for log the props of the component.
const UserInfoWrapper = logProps(UserInfo);

const UserAddedToInfoWrapper = includeUser(UserInfoWrapper, 1);

export default function Home() {
    return (
        <>
            <h1>Welcome to Brazucas!</h1>
            <p>Soon I will develop the main app, keep waiting there...</p>

            <p>&nbsp;</p>
            <p>&nbsp;</p>

            <h1>HOC: Including the user</h1>
            <UserAddedToInfoWrapper />
        </>
    );
}
