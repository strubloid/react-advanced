import Image from "next/image";
import { SplitScreen } from "@components/split-screen/SplitScreen";

const LeftSideComponent = () => {
    return (
        <>
            <h2>I am Left</h2>
        </>
    );
};

const RightSideComponent = () => {
    return (
        <>
            <h2>I am Right</h2>
        </>
    );
};

export default function Home() {
    return (
        <>
            <header>
                <h2>Brazucas</h2>
            </header>
            <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} />
        </>
    );
}
