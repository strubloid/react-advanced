import { emitter } from "@/app/page";

/**
 * Main buttons component that will render the increment and decrement buttons.
 * @returns A JSX element containing the increment and decrement buttons.
 */
export const Buttons = () => {

    /**
     * This will emit the increment event
     * that will trigger things auround the app
     * that is listening for this event, like the counter component.
     */
    const onIncrementCounter = () => {
        emitter.emit("increment");
    }

    /**
     * This will emit the decrement event
     * that will trigger things auround the app
     * that is listening for this event, like the counter component.
     */
    const onDecrementCounter = () => {
        emitter.emit("decrement");
    }
    
    return (
        <div>
            <button onClick={onIncrementCounter}>+</button>
            <button onClick={onDecrementCounter}>-</button>
        </div>
    );
};