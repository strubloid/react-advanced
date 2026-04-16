import { useId,  useState } from "react";

const Form = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // this is the best way to create unique ids for form elements
    const id = useId();
    return (
        <div>
            <label htmlFor={`email-${id}`}>Email</label>
            <input
                id={`email-${id}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor={`name-${id}`}>Name</label>
            <input
                id={`name-${id}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    );
};

export const UseIDExample = () => {

    return (
        <>
            <Form />
            <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout.
            </p>
            <Form />
        </>
    );
}
