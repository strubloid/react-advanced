import React, { useState } from "react";

export const UncontrolledFlow = ({ children, onDone }: { children: React.ReactNode; onDone: () => void }) => {
    // data of the object
    const [data, setData] = useState<string | null>(null);

    // current step of the flow
    const [currentStep, setCurrentStep] = useState<number>(0);

    /**
     * set the current step to the next one.
     */
    const goNext = () => {
        setCurrentStep(currentStep + 1);
    };

    // this is the current child component
    const currentChild = React.Children.toArray(children)[currentStep];

    // if the current child is a valid React element, we clone it and pass the goNext function as a prop
    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goNext } as any);
    }

    return currentChild;
};
