import { useState, useEffect } from "react";
import { Throttle } from "../helpers/Throttle";

interface MousePosition {
    x: number;
    y: number;
}

interface UseMousePositionOptions {
    throttleDelay?: number;
}

export const useMousePosition = (options?: UseMousePositionOptions): MousePosition => {

    const throtleDelay = options?.throttleDelay || 200; // Default throttle delay of 200ms

    // Initialize state to store mouse position
    const [position, setPosition] = useState<MousePosition>({
        x: 0, y: 0
    });

    // Effect to add event listener for mouse movement
    useEffect(() => {

        // Event handler to update mouse position state
        // const onMouseMove = (event: MouseEvent) => {
        //     const { clientX : x, clientY : y } = event;
        //     setPosition({x,y});
        // };

        // we change to:
        const onMouseMove = Throttle((event: MouseEvent) => {
            const { clientX : x, clientY : y } = event;
            setPosition({x,y});
        }, throtleDelay);

        // adding the event listener to the window object
        window.addEventListener("mousemove", onMouseMove);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
        };

    }, []);

    return position;
};

export default useMousePosition;
