import Image from "next/image";
import { SplitScreen } from "@components/split-screen/SplitScreen";
import { authors } from "./data/Authors";
import { SmallAuthorListItems } from "@/app/components/autors/SmallListItems";
import { LargeAuthorListItems } from "@components/autors/LargeListItems";
import { SmallBookListItems } from "@components/books/SmallListItems";
import { LargeBookListItems } from "@components/books/LargeListItems";
import { NormalList } from "@components/lists/NormalList";
import { NumberedList } from "@components/lists/NumberedList";
import { books } from "./data/Books";
import { BasicModal } from "./components/modals/BasicModal";

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
                    <BasicModal>
                        {authors.map((author) => (
                            <LargeAuthorListItems key={author.id} author={author} />
                        ))}
                    </BasicModal>
                    {/* <NormalList items={authors} sourceName="author" ItemComponent={LargeAuthorListItems} /> */}
                </LeftSideComponent>
                <RightSideComponent>
                    <NumberedList items={books} sourceName="book" ItemComponent={SmallBookListItems} />
                    <BasicModal>
                        {books.map((book) => (
                            <LargeBookListItems key={book.id} book={book} />
                        ))}
                    </BasicModal>
                </RightSideComponent>
            </SplitScreen>
        </>
    );
}
