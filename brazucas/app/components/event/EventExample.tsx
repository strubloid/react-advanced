import { JSX, useState } from "react";
import { AlertPortal } from "../portals/Alert";

/**
 * This is the component that will be showing the basis of a portal.
 *
 * @returns portal example component.
 */
export const EventExample = (): JSX.Element => {

    const [show, setShow] = useState(false);
    // I had to add the onClickCapture to the div, because the onClick of the AlertPortal
    // is being called before the onClick of the div, and I want to see the order of the
    // events in the console.
    return (
        <>
            <div onClickCapture={() => console.log("outer div")} style={{position: "absolute", marginTop: "200px"}}>
                <h1>Other Content</h1>
                <button onClick={() => setShow(true)}>Show Message</button>
                <AlertPortal show={show} onClose={() => setShow(false)}>
                    A sample message to show.
                    <br />
                    Click it to close.
                </AlertPortal>
            </div>
        </>
    );
}
