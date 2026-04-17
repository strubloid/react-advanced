import { GreenSmallButton, RedButton } from "../components/composition/Composition";
import { SmallRedButton } from "../components/composition/Partial";
import { LeftSide } from "../components/layout/LeftSide";
import { RightSide } from "../components/layout/RightSide";
import { SplitScreen } from "../components/split-screen/SplitScreen";
import { RecursiveComponent } from "../components/recursion/Recursive";
import { NestedObject } from "../data/NestedObject";

/**
 * This is an example of how to use the RecursiveComponent to render a nested object.
 * It will be showing the RecursiveComponent in the left side of the screen and some buttons
 * in the right side of the screen.
 * The RecursiveComponent will be rendering the NestedObject, which is a nested object defined in
 * the data folder.
 * @returns
 */
export const RecursiveExample = () => {

    return (
        <>
            <h1>Recursive Component</h1>
            <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSide>
                    <h1>Recursive left</h1>
                    <RecursiveComponent data={NestedObject} />
                </LeftSide>
                <RightSide>
                    <h1>Recursive right</h1>
                    <RedButton size="large" text="This is a red button"  />
                    <GreenSmallButton text="This is a green small button" />
                    <SmallRedButton text="This is a small red button" />
                </RightSide>
            </SplitScreen>
        </>
    );
};
