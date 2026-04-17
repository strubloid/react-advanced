import { useCallback, useEffect,  useRef, useState } from "react";

/**
 * When we want to perform an action in the element while is being rendered
 * we can use the useCallback hook to get a reference to the element and perform the action.
 * In this example, we want to focus the input when it is being rendered, so we use the useCallback
 * hook to get a reference to the input and call the focus method on it.
 * @returns
 */
export const UseCallbackExample = () => {

    // this is a unique id that will be generated for each instance of the component
    // const inputRef : React.RefObject<HTMLInputElement | null> = useRef(null);

    // this state is used to show or hide the input, to test if the focus is working correctly
    const [showInput, setShowInput] = useState(false);

    // this is the real reference to the input element, but we will not use it directly, we will use the useCallback instead
    const realInputRef = useRef<HTMLInputElement | null>(null);

    // using the useCallback instead of useRef and useEffect
    const inputRef =  useCallback( (input : HTMLInputElement | null) => {
        realInputRef.current = input;
        if (input == null) return;
        input.focus();
    }, []);

    return (
        <>
            <button onClick={() => setShowInput(!showInput)}>
                {showInput ? "Hide" : "Show"} Input
            </button>
            {showInput && <input ref={inputRef} type="text" />}
        </>
    );
}
