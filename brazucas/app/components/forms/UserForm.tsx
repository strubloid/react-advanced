// import { includeUpdateableUser } from "../hoc/includeUpdateableUser";
import { includeUpdateableResource } from "../hoc/includeUpdateableResource";
import { UserType } from "@/app/data/Users";

type UserInfoFormProps = {
    user: UserType;
    onChangeUser: (user: Partial<UserType>) => void;
    onPostUser: () => void;
    onResetUser: () => void;
};
export const UserInfoForm = includeUpdateableResource(
    ({ user, onChangeUser, onPostUser, onResetUser }: UserInfoFormProps) => {
        // destructuring the user object to get the id, name and age, if the user is null we set them to empty strings
        const { id, name, age } = user || {};

        return user ? (
            <>
                <input type="hidden" value={id} />
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => onChangeUser({ name: e.target.value })} />
                </label>
                <label>
                    Age:
                    <input type="number" value={age} onChange={(e) => onChangeUser({ age: Number(e.target.value) })} />
                </label>
                <button onClick={onResetUser}>Reset</button>
                <button onClick={onPostUser}>Save</button>
            </>
        ) : (
            <h3>Loading user data...</h3>
        );
    },
    "/api/users/1",
    "user",
);
