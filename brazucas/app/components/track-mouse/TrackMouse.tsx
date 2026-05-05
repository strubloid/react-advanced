import {useMousePosition} from "./hooks/useMousePosition";

export const TrackMouse = (props: unknown) => {

    // loading the custom hook to track mouse position
    const position = useMousePosition();

    return (
        <div>
            <h3>Track Mouse</h3>
            <p>Mouse position: ({position.x}, {position.y})</p>
        </div>
    );
};

export default TrackMouse;
