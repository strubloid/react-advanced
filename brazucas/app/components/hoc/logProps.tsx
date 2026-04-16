import { ComponentType } from "react";

/**
 * This is a simple HOC that will log the props of a component to the console.
 * It can be used for debugging purposes, to see what props are being passed to a component.
 * @param Component The component whose props will be logged.
 * @returns A new component that logs its props.
 */
export const logProps = <P extends object>(Component: ComponentType<P>) => {
    const WithLogProps = (props: P) => {
        console.log("props:", props);
        return <Component {...props} />;
    };

    WithLogProps.displayName = `WithLogProps(${Component.displayName ?? Component.name})`;

    return WithLogProps;
};
