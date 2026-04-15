import { useEffect, useState } from "react";
import { emitter } from "../../page";

/**
 * This is a simple counter component that will be used to demonstrate the 
 * use of state in a functional component.
 * @returns A counter component that displays the current count and has buttons 
 * to increment and decrement the count.
 */
export const Counter = () => {

    // main state of the value change
    const [count, setCount] = useState(0);

    // using useEffect to subscribe to the increment and decrement events emitted by the buttons component
    useEffect(() => {

        // creating the onIncrement and onDecrement functions 
        const onIncrement = () => setCount((count) => count +1);
        const onDecrement = () => setCount((count) => count -1);

        // subscribing to the increment and decrement events emitted by the buttons component
        emitter.on("increment", onIncrement);
        emitter.on("decrement", onDecrement);

        // cleaning up the event listeners when the component is unmounted
        return () => {
            emitter.off("increment", onIncrement);
            emitter.off("decrement", onDecrement);
        }
    }, [])
    
    return (<div># {count}</div>);
};