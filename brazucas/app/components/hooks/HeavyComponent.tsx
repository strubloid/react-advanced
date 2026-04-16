import { memo, useCallback, useEffect,  useRef, useState } from "react";

interface HeavyComponentProps {
    keyword: string;
}

const HeavyComponentBase = ({ keyword }: HeavyComponentProps) => {

    const init = performance.now();
    while (init > performance.now() - 200) {
        // Simulating a heavy computation that takes 1 second to complete.
        // console.log(performance.now() - init);
    }
    return (
        <>
            <h1>I am a very heavy component</h1>
            <p>{keyword}</p>
        </>
    );
}

export const HeavyComponent = memo(HeavyComponentBase);
