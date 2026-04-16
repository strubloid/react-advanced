/**
 * This will serve as example of a child component that will throw an error, which will
 * be caught by the error boundary in the parent component.
 * @returns Child component that throws an error.
 */
export const Child = () => {

    // this is simulating an error being thrown in the child component,
    // which will be caught by the error boundary in the parent component.
    throw new Error("This is an error from the child component");

    return (<h1>Child Component</h1>);

}
