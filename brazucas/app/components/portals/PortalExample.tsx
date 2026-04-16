import { JSX, useState } from "react";
import { AlertPortal } from "./Alert";

/**
 * This is the component that will be showing the basis of a portal.
 *
 * @returns portal example component.
 */
export const PortalExample = (): JSX.Element => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div onClick={() => console.log("outer div")} style={{position: "absolute", marginTop: "200px"}}>
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
