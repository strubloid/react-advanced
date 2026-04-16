import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const UseLayoutEffectExample = () => {
    const [show, setShow] = useState(false);
    const [top, setTop] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // this one does the test on the next render
    useLayoutEffect(() => {
        if (buttonRef.current === null || !show) {
            setTop(0);
            return;
        }
        const { bottom } = buttonRef.current.getBoundingClientRect();
        setTop(bottom + 30);
    }, [show]);

    // const now = performance.now();
    // while (now > performance.now() - 100) {
    //     // Simulating a heavy computation that takes 1 second to complete.
    // }

    return (
        <>
            <button ref={buttonRef} onClick={() => setShow((s) => !s)}>
                Show
            </button>
            {show && (
                <div className="tooltip" style={{ top: `${top}px` }}>
                    Some text ...
                </div>
            )}
        </>
    );
}
