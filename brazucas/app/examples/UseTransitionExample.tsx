import { SetStateAction, useState, useTransition } from "react";
import { StyledButton } from "../components/demo/StyledElements";
import Cover from "../components/demo/Cover";
import Reviews from "../components/demo/Reviews";
import Writer from "../components/demo/Writer";

export const UseTransitionExample = () => {

    const [section, setSection] = useState("Cover");

    // to solve this is the key
    const [isPending, startTransition] = useTransition();

    const sectionHandler = (sec: SetStateAction<string>) => {
        // we start the transition, and inside it we set the section,
        // so it will not block the UI while loading the new section
        startTransition(() => {
            setSection(sec);
        });
    };

    return (
        <>
            <StyledButton onClick={() => sectionHandler("Cover")}>
        Book Cover
            </StyledButton>
            <StyledButton onClick={() => sectionHandler("Reviews")}>
        Book Reviews
            </StyledButton>
            <StyledButton onClick={() => sectionHandler("Writer")}>
        Book&apos;s Writer
            </StyledButton>

            {section === "Cover" ? (
                <>
                    {isPending && <p>Loading...</p>}
                    <Cover />
                </>
            ) : section === "Reviews" ? (
                <>
                    {isPending && <p>Loading...</p>}
                    <Reviews />
                </>
            ) : (
                <>
                    {isPending && <p>Loading...</p>}
                    <Writer />
                </>
            )}
        </>
    );
}
