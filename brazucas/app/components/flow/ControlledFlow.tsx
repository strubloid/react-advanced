import React, { useState } from "react";

export const ControlledFlow = ({
    children,
    onDone,
    currentStep,
    onNext,
}: {
    children: React.ReactNode;
    onDone: (data: object) => void;
    currentStep: number;
    onNext: (dataFromStep: object) => void;
}) => {
    // function that will be passing the data from step
    const goNext = (dataFromStep: object) => {
        onNext(dataFromStep);
    };

    // this is the current child component
    const currentChild = React.Children.toArray(children)[currentStep];

    // if the current child is a valid React element, we clone it and pass the onNext function as a prop
    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext } as any);
    }

    return currentChild;
};
