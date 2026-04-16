"use client";
import React, { ReactNode } from "react";

// This is the error boundry props
type ErrorBoundryProps = {
    fallback: (error: Error) => ReactNode;
    children: ReactNode;
};

// This is the error boundry state
type ErrorBoundryState = {
    hasError: boolean;
    error: Error | null;
};

/**
 * This will be a class that will be dealing with error boundaries in React.
 * It will be used to catch errors that are thrown in the child components and
 * display a fallback UI instead of crashing the entire application.
 * @returns a simple error boundary component that can be used to catch errors
 * in child components.
 */
export class ErrorBoundry extends React.Component<ErrorBoundryProps, ErrorBoundryState> {

    // saving the state of whether an error has been caught or not, and the error itself.
    state: ErrorBoundryState = { hasError: false, error: null };

    /**
     * This static method is called when an error is thrown in a child component, and it updates the state to indicate
     * that an error has been caught.
     * @param error
     * @returns
     */
    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    /**
     * This will print the error, so you can understand better where
     * the error is coming from, and what is the error itself.
     * @param error The error that was thrown.
     * @param errorInfo An object with information about the component stack.
     */
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Error caught in ErrorBoundry:", error, errorInfo);
    }

    // this is the return of the fallback or the children
    render (){

        // we check if exist an error, if does we return the fallback of it
        if(this.state.hasError && this.state.error){
            return this.props.fallback(this.state.error);
        }

        // otherwise we just return the children component
        return this.props.children;

    }

}
