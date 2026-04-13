import Image from "next/image";
import { SplitScreen } from "@components/split-screen/SplitScreen";

const LeftSideComponent = () => {
    return (
        <>
            <h2 style={{ backgroundColor: "red" }}>I am Left</h2>
        </>
    );
};

const RightSideComponent = () => {
    return (
        <>
            <h2 style={{ backgroundColor: "blue" }}>I am Right</h2>
        </>
    );
};

export default function Home() {
    return (
        <>
            <header>
                <h2 style={{ textAlign: "center", margin: "20px 0px" }}>Brazucas</h2>
            </header>
            <SplitScreen Left={LeftSideComponent} Right={RightSideComponent} />
        </>
    );
}
