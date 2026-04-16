import { JSX } from "react";
import Card from "./CardComponent";

/**
 * This is the example of a card component that can be used in the app.
 * It is a simple card component that can be used to display content in a card format.
 * @returns JSX.Element
 */
export const CardExample = (): JSX.Element => {
    return (
        <Card>
            <Card.Header>
                <h1 style={{ margin: "0" }}>Header</h1>
            </Card.Header>
            <Card.Body>
                    He hid under the covers hoping that nobody would notice him there. It
                    really didnt make much sense since it would be obvious to anyone who
                    walked into the room there was someone hiding there, but he still held
                    out hope. He heard footsteps coming down the hall and stop in front in
                    front of the bedroom door. He heard the squeak of the door hinges and
                    someone opened the bedroom door. He held his breath waiting for whoever
                    was about to discover him, but they never did.
            </Card.Body>
            <Card.Footer>
                <button>Ok</button>
                <button>Cancel</button>
            </Card.Footer>
        </Card>
    );
};
