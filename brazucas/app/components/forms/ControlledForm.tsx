import React from "react";
import { useState, useEffect } from "react";
export const ControlledForm = () => {
    // This is the place to set the form state, and to handle the form submission
    const [error, setError] = useState<string | null>(null);

    // age and name state variables are initialized with default values of
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(0);

    useEffect(() => {
        if (name.length < 3) {
            setError("Name is required");
        } else {
            setError("");
        }
        console.log(name);
    }, [name]);

    return (
        <>
            <h1>Controlled Form</h1>
            <form>
                {error ? <p style={{ color: "red" }}>{error}</p> : null}
                <input name="name" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input name="age" type="number" placeholder="Age" value={age} onChange={(e) => setAge(Number(e.target.value))} />
                <button>Submit</button>
            </form>
        </>
    );
};
