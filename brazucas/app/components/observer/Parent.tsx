import { Buttons } from "./Buttons";
import { Counter } from "./Counter";

/**
 * Main parent component that will render the buttons and the counter components.
 * @returns a parent component that contains the buttons and the counter components.
 */
export const ParentComponent = () => {
    return (
        <>
            <Buttons />
            <Counter />
        </>
    );
};