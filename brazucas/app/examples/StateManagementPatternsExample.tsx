import { JSX, useState } from "react";
import { TaskBoard } from "../components/board/Task";

type Person = {
    name: string;
    age: number;
};

export const StateManagementPatternsExample = (): JSX.Element => {

    // getting the person state
    const [person, setPerson] : [Person, React.Dispatch<React.SetStateAction<Person>>]
        = useState({ name: "Superman" } as Person);

    const onChange = () => {

        // does not work
        // person.age = 24;

        // work this way with the ... spread operator, because it creates a new object in memory
        setPerson({ ...person, age: 24 });
    }

    return (<>
        {/* <h1>State Management Patterns Example</h1> */}
        <TaskBoard />
    </>);
};
