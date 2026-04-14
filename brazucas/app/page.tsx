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
import { DataSourceWithChildren } from "./components/loaders/DataSourceWithChildren";
import { DataSourceRender } from "./components/loaders/DataSourceRender";

import axios from "axios";
import { BasicValidation } from "./services/BasicValidation";
import { LocalStorage } from "./services/LocalStorage";
import { UncontrolledForm } from "./components/forms/UncontrolledForm";
import { ControlledForm } from "./components/forms/ControlledForm";
import { useState } from "react";
import { UncontrolledFlow } from "./components/flow/UncontrolledFlow";
import { ControlledFlow } from "./components/flow/ControlledFlow";
import { StepOne } from "./components/flow/Step1";
import { StepTwo } from "./components/flow/Step2";
import { StepThree } from "./components/flow/Step3";

const LeftSideComponent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

const RightSideComponent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

// This will be a simple component to display a message
const Message = ({ msg }: { msg: string | null }) => (msg ? <h1>{msg}</h1> : <h1>No message available</h1>);

export default function Home() {
    const [shouldDisplay, setShouldDisplay] = useState(false);
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

    /**
     * This will load data from a sever.
     * @param endpoint - the endpoint from which the data will be fetched
     * @returns the data from the server
     */
    const getDataFromServer = async (endpoint: string) => {
        // loading the data from the server
        let request = await axios(endpoint);

        // validation from the service BasicValidation
        BasicValidation.axiosValidate(request, endpoint);

        return request.data;
    };

    /**
     * This will be responsible for handling the button click, and for toggling the modal visibility.
     */
    const buttonClickHandler = () => {
        setShouldDisplay(!shouldDisplay);
    };

    /**
     * This will be responsible for showing the correct button text, depending on the modal visibility state.
     * @returns a string with the button text, either "Show Modal" or "Hide Modal"
     */
    const showModalDisplayName = () => {
        return shouldDisplay ? "Hide Modal" : "Show Modal";
    };

    /**
     * This will be responsible for handling the modal close action, and for setting the modal visibility state to false.
     */
    const onCloseModal = () => {
        setShouldDisplay(false);
    };

    return (
        <>
            <header>
                <h2 style={{ textAlign: "center", margin: "20px 0px" }}>Brazucas</h2>
            </header>
            <ControlledFlow
                onDone={(data) => {
                    console.log(data);
                    alert("finished!" + JSON.stringify(data));
                }}
            >
                <StepOne />
                <StepTwo />
                <StepThree />
            </ControlledFlow>

            {/* <UncontrolledFlow onDone={uncontrolledFlowDoneHandler}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledFlow> */}

            {/* <BasicModal shouldDisplay={shouldDisplay} onClose={onCloseModal}>
                <h1>This is the modal content</h1>
            </BasicModal>
            <button onClick={buttonClickHandler}>{showModalDisplayName()}</button> */}

            {/* <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSideComponent>
                    <UncontrolledForm />
                </LeftSideComponent>
                <RightSideComponent>
                    <ControlledForm />
                </RightSideComponent>
            </SplitScreen> */}

            {/* <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSideComponent>
                    <DataSourceWithChildren getData={fetchUserData} ResourceName="user">
                        <UserInfo user={null} />
                    </DataSourceWithChildren>
                </LeftSideComponent>
                <RightSideComponent>
                    <DataSourceWithChildren getData={fetchBookData} ResourceName="book">
                        <BookInfo book={null} />
                    </DataSourceWithChildren>

                    <DataSourceWithChildren getData={async () => LocalStorage.load("test")} ResourceName="msg">
                        <Message msg={null} />
                    </DataSourceWithChildren>
                </RightSideComponent>
            </SplitScreen> */}

            {/* <SplitScreen leftWidth={1} rightWidth={1}>
                <LeftSideComponent>
                    <DataSourceRender getData={fetchUserData} render={(resource) => <UserInfo user={resource} />}></DataSourceRender>
                    <BasicModal>
                        {authors.map((author) => (
                            <LargeAuthorListItems key={author.id} author={author} />
                        ))}
                    </BasicModal>
                </LeftSideComponent>
                <RightSideComponent>
                    <DataSourceRender getData={fetchBookData} render={(resource) => <BookInfo book={resource} />}></DataSourceRender>
                    <BasicModal>
                        {books.map((book) => (
                            <LargeBookListItems key={book.id} book={book} />
                        ))}
                    </BasicModal>
                </RightSideComponent>
            </SplitScreen> */}
        </>
    );
}
