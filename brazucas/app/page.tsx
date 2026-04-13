"use client";
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
import { DataSource } from "./components/loaders/DataSource";
import axios from "axios";

const LeftSideComponent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const RightSideComponent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export default function Home() {
    /**
     * This will be responsible for fetching the user data from the server.
     * @returns User data from the server
     */
    const fetchUserData = async () => {
        // loading the data from the server
        let userData = await axios("/api/users/3");

        // basic validation to check if the response is ok, if not we throw an error
        if (userData.status !== 200) {
            throw new Error("Failed to fetch user data");
        }

        let user = userData.data;

        // basic validation to check if the user data is not empty, if it is we throw an error
        if (!user) {
            throw new Error("User data is empty, or does not exist");
        }

        return user;
    };

    /**
     * This will be responsible for fetching the book data from the server.
     * @returns Book data from the server
     */
    const fetchBookData = async () => {
        // loading the data from the server
        let bookData = await axios("/api/books/2");

        // basic validation to check if the response is ok, if not we throw an error
        if (bookData.status !== 200) {
            throw new Error("Failed to fetch book data");
        }

        // loading the book data from the response
        let book = bookData.data;

        // basic validation to check if the book data is not empty, if it is we throw an error
        if (!book) {
            throw new Error("Book data is empty, or does not exist");
        }

        return book;
    };

    return (
        <>
            <header>
                <h2 style={{ textAlign: "center", margin: "20px 0px" }}>Brazucas</h2>
            </header>

            <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSideComponent>
                    <DataSource getData={fetchUserData} ResourceName={"user"}>
                        <UserInfo user={null} />
                    </DataSource>
                    <BasicModal>
                        {authors.map((author) => (
                            <LargeAuthorListItems key={author.id} author={author} />
                        ))}
                    </BasicModal>
                </LeftSideComponent>
                <RightSideComponent>
                    <DataSource getData={fetchBookData} ResourceName={"book"}>
                        <BookInfo book={null} />
                    </DataSource>
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
