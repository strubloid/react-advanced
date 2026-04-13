import Image from "next/image";
import { SplitScreen } from "@components/split-screen/SplitScreen";

const LeftSideComponent = ({ title }: { title: string }) => {
    return (
        <>
            <h2 style={{ backgroundColor: "red" }}>{title}</h2>
        </>
    );
};

const RightSideComponent = ({ title }: { title: string }) => {
    return (
        <>
            <h2 style={{ backgroundColor: "blue" }}>{title}</h2>
        </>
    );
};

export default function Home() {
    return (
        <>
            <header>
                <h2 style={{ textAlign: "center", margin: "20px 0px" }}>Brazucas</h2>
            </header>
            <SplitScreen leftWidth={1} rightWidth={3}>
                <LeftSideComponent title={"Left"} />
                <RightSideComponent title={"Right"} />
            </SplitScreen>
        </>
    );
}
