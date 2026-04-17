import { BookForm } from "../components/forms/BookForm";
import { UserInfoForm } from "../components/forms/UserForm";
import { UserInfo } from "../components/user/UserInfo";
import { includeUser } from "../components/hoc/includeUser";
import { logProps } from "../components/hoc/logProps";

// this will be adding the user info as a prop for log the props of the component.
const UserInfoWrapper = logProps(UserInfo);

// this will be adding the user info as a prop for log the props of the component and include the user info in the component.
const UserAddedToInfoWrapper = includeUser(UserInfoWrapper, 1);

export const HocExample = () => {

    return (
        <>
            <UserInfo userId={2}/>
            <h1>HOC: Book example</h1>
            <BookForm />

            <h1>HOC: Including the user with form</h1>
            <UserInfoForm />

            <h1>HOC: Including the user</h1>
            <UserAddedToInfoWrapper />
        </>
    );
};
