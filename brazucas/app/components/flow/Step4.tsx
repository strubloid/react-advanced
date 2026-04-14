/**
 * Step components for the UncontrolledFlow, they will receive a
 * goNext function as a prop, that will be responsible for going
 * to the next step when the button is clicked.
 * @param goNext - a function that will be called when the button is clicked,
 * and will be responsible for going to the next step
 * @returns a React component that will display the step content and a button
 * to go to the next step
 */
export const StepFour = ({ goNext }: { goNext: (data: object) => void }) => {
    return (
        <>
            <h1>Where is the country you are from?</h1>
            {/* <input type="text" placeholder="Country" /> */}
            <button onClick={() => goNext({ country: "Japan" })}>button</button>
        </>
    );
};
