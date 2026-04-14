import React from "react";

export const UncontrolledForm = () => {
    const nameInputRef = React.useRef<HTMLInputElement>(null);
    const ageInputRef = React.useRef<HTMLInputElement>(null);

    /**
     * This will be responsible for handling the form submission,
     * and for validating the form data before sending it to the server.
     */
    const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>): void => {
        event.preventDefault();

        // getting the value for each input field using refs
        const name = nameInputRef.current?.value;
        const age = ageInputRef.current?.value;

        // printing it
        console.log("Form submitted", { name, age });
    };

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={submitHandler}>
                <input name="name" type="text" placeholder="Name" ref={nameInputRef} />
                <input name="age" type="number" placeholder="Age" ref={ageInputRef} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};
