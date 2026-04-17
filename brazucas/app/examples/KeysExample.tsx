import { useState } from "react";
import { Counter } from "./Counter";

export const KeysExample = () => {

    // This is just a simple example to show how to use keys in React.
    const [changeShirts, setChangeShirts] = useState(false);

    return (
        <div>
            {changeShirts ? (
                <span>Shirts counts: </span>
            ): (
                <span>Shoes counts: </span>
            )}
            <br />
            <input type="number" key={changeShirts ? "shirts" : "shoes"} />
            <br />
            <button onClick={() => setChangeShirts((s) => !s)}>Switch</button>
        </div>
    );
};
