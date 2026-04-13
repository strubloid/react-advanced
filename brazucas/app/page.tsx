import Image from "next/image";
import { SplitScreen } from "@components/split-screen/SplitScreen";
import { authors } from "./data/Authors";
import { SmallAuthorListItems } from "@components/autors/SmallListItems";
import { LargeAuthorListItems } from "@components/autors/LargeListItems";
import { SmallBookListItems } from "@components/books/SmallListItems";
import { LargeBookListItems } from "@components/books/LargeListItems";
import { NormalList } from "@components/lists/NormalList";
import { books } from "./data/Books";

const LeftSideComponent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const RightSideComponent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default function Home() {
    return (
        <>
            <header>
                <h2 style={{ textAlign: "center", margin: "20px 0px" }}>Brazucas</h2>
            </header>
            <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSideComponent>
                    <NormalList items={authors} sourceName="author" ItemComponent={SmallAuthorListItems} />
                    <NormalList items={authors} sourceName="author" ItemComponent={LargeAuthorListItems} />
                </LeftSideComponent>
                <RightSideComponent>
                    <NormalList items={books} sourceName="book" ItemComponent={SmallBookListItems} />
                    <NormalList items={books} sourceName="book" ItemComponent={LargeBookListItems} />
                </RightSideComponent>
            </SplitScreen>
        </>
    );
}
