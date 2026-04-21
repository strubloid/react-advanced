import { JSX } from "react";
import  API  from "@app/api/Axios";
import Users from "../components/users/Users";

export const APIExample = (): JSX.Element => {

    return (<>
        <h1>API Example</h1>
        <Users />
    </>);
};
