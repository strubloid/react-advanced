import React, { useState } from "react";

export const ControlledFlow = ({ children, onDone }: { children: React.ReactNode; onDone: (data: object) => void }) => {
    // data of the object
    const [data, setData] = useState<object>({});

    // current step of the flow
    const [currentStep, setCurrentStep] = useState<number>(0);

    /**
     * set the current step to the next one.
     */
    const goNext = (dataFromStep: object) => {
        // getting the next step
        const nextStep = currentStep + 1;

        // new data object
        const newData = { ...data, ...dataFromStep };
        console.log(newData);

        // checking if the next step is valid
        if (nextStep < React.Children.count(children)) {
            setCurrentStep(nextStep);
        } else {
            onDone(newData);
        }

        // setting this new data object to the state
        setData(newData);

        // going to the next step
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
