import { useCallback, useDeferredValue, useEffect,  useRef, useState } from "react";
import { HeavyComponent } from "./HeavyComponent";

export const UseDeferredValueExample = () => {
    const [keyword, setKeyword] = useState("");

    // this will defer the value of the keyword, so it will not update until the next render,
    // and it will not cause the heavy component to re-render until the next render.
    const deferedKeyword = useDeferredValue(keyword);

    console.log("keyword:", keyword);
    console.log("deferedKeyword:", deferedKeyword);

    return (
        <>
            <input value={keyword} onChange={ (element) => setKeyword(element.target.value)} />
            <HeavyComponent keyword={deferedKeyword} />
        </>
    );
}
