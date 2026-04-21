import { useEffect, useState } from "react";

const LazyLoader = (props) => {

    // we destructure the props to get the show and delay values, we set them to false and 0 by default
    const { show = false, delay = 0 } = props;

    // we use a state to control when to show the loader, we set it to false by default
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {

        let timeout: NodeJS.Timeout;
        console.log("SHOW?", show)

        // if the show value is false, we hide the loader and return
        if (!show){
            setShowLoader(false);
            return;
        }

        // if the delay value is 0, we show the loader immediately, otherwise we set
        // a timeout to show the loader after the specified delay
        if (delay === 0) {
            console.log("1")
            setShowLoader(true);
        } else {
            console.log("2")
            timeout = setTimeout(() => {
                console.log("3")
                setShowLoader(true);
            }, delay);
        }

        // we clear the timeout when the component is unmounted or when the show or delay values change
        return () => {
            clearTimeout(timeout);
        };

    }, [show, delay]);

    return showLoader ? "Loading..." : props.default;
}

export default LazyLoader;
