import { ReactNode } from "react";
import "./Alert.css";

// step 1: we import createPortal from react-dom to create a portal.
import { createPortal } from "react-dom";

type AlertProps = {
    children: ReactNode;
    onClose?: () => void;
    show: boolean;
};

/**
 * This is a simple alert component that will be rendered in a portal.
 * It will be shown when the show prop is true and will be hidden when the show prop is false.
 * It will also call the onClose function when the alert is clicked.
 * @param children:  the content to be shown in the alert.
 * @param onClose: the function to be called when the alert is clicked.
 * @param show: a boolean that determines whether the alert should be shown or not.
 * @returns a simple alert component that can be used in a portal.
 */
export const AlertPortal = ({ children, onClose, show } : AlertProps) => {

    if (!show) return;

    // step 2: we decide where we want to load our Portal
    // const placeToLoad = document.body;
    const placeToLoad = document.querySelector("#alert-holder") as HTMLElement;

    // step 3: we call createPortal and pass the content and the place to load.
    return createPortal(
        <div className="alert" onClick={onClose}>
            {children}
        </div>,
        placeToLoad
    );
};
