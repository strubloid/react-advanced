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
import { CurrentUserLoader } from "./components/user/CurrentUserLoader";
import { UserInfo } from "./components/user/UserInfo";
import { UserLoader } from "./components/user/UserLoader";

import { ResourceLoader } from "./components/loaders/ResourceLoader";
import { BookInfo } from "./components/books/BookInfo";

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
                    <ResourceLoader resourceUrl={"/api/users/2"} ResourceName={"user"}>
                        <UserInfo user={null} />
                    </ResourceLoader>
                    <BasicModal>
                        {authors.map((author) => (
                            <LargeAuthorListItems key={author.id} author={author} />
                        ))}
                    </BasicModal>
                </LeftSideComponent>
                <RightSideComponent>
                    <ResourceLoader resourceUrl={"/api/books/2"} ResourceName={"book"}>
                        <BookInfo book={null} />
                    </ResourceLoader>
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
