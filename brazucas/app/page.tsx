"use client";
import { logProps } from "./components/hoc/logProps";
import { UserInfo } from "./components/user/UserInfo";

// this will be adding the user info as a prop for log the props of the component.
const UserInfoWrapper = logProps(UserInfo);

export default function Home() {
    return (
        <>
            <h1>Welcome to Brazucas!</h1>
            <UserInfoWrapper test="lucas" lol="funny" age={82} />

            <p>This is a React app built with Next.js, TypeScript, and Tailwind CSS.</p>
        </>
    );
}
