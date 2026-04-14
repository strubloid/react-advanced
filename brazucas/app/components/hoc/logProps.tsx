/**
 * This is a simple HOC that will log the props of a component to the console.
 * It can be used for debugging purposes, to see what props are being passed to a component.
 * @param Component The component whose props will be logged.
 * @returns A new component that logs its props.
 */
export const logProps = (Component: any) => {
    return (props: any) => {
        console.log(props);
        return <Component {...props} />;
    };
};
