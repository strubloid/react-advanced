import React, { useState, useEffect } from "react";
import { fetchUsers } from "@/app/api/UsersAPI";
import styled from "styled-components";
import { User } from "@/app/types/UserType";
import { withAsync } from "@/app/helpers/WithAsync";
import type { WithAsyncResult } from "@/app/helpers/WithAsync";
import { ApiStatus, APIStatysType } from "@/app/constants/APIStatus";
import { UseApiStatus } from "@/app/api/hooks/UseAPIStatus";
import LazyLoader from "../loaders/LazyLoader";

const useFetchUsers = () => {

    // users state to store the fetched users data
    const [users, setUsers] = useState<User[]>([]);

    // fetchUserStatus state to indicate the status of the API request (IDLE, LOADING, SUCCESS, ERROR)
    // const [fetchUserStatus, setFetchUserStatus] = useState<APIStatysType>(ApiStatus.IDLE);

    const {
        status : fetchUserStatus,
        setStatus : setFetchUsersStatus,
        isIdle : isFetchUsersIdle,
        isLoading : isFetchUsersLoading,
        isError : isFetchUsersError,
        isSuccess : isFetchUsersSuccess,
    } = UseApiStatus(ApiStatus.IDLE);

    /**
     * fetchUsers function to fetch the users data from the API and update the users state
     * it uses the API object to make the GET request to the users endpoint and updates the
     * users state with the response data
     */
    const initFetchUsers = async () => {

        // we set to status to LOADING to indicate that the API request is being made
        setFetchUsersStatus(ApiStatus.LOADING);

        // loading the response or the error from helper withAsync, we pass the async fetchUSers function
        const { response, error } : WithAsyncResult<User[]> = await withAsync(fetchUsers);

        // in a case we have an error, we just throw it
        if (error) {
            setFetchUsersStatus(ApiStatus.ERROR);
        } else if (response) {

            // we set the fetchUserStatus state to SUCCESS to indicate that the API request has finished successfully
            setFetchUsersStatus(ApiStatus.SUCCESS);

            // we set the users state with the response data
            setUsers(response || []);
            // console.log("Fetched users: ", response);
        }

    };

    return {
        users,
        isFetchUsersIdle,
        isFetchUsersLoading,
        isFetchUsersError,
        isFetchUsersSuccess,
        initFetchUsers,
    }

};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 2xl;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContentContainer = styled.div`
  width: 50%;
`;

const UserName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.h3`
  font-size: 1rem;
  color: #555555;
`;

const FetchButton = styled.button`
  margin-top: 1rem;
  background-color: #0053b3;
  color: #ffffff;
  padding: 1rem;
`;

function Users() {

    // loading the users and initFetchUsers function from the useFetchUsers hook
    const { users, isFetchUsersIdle, isFetchUsersLoading, isFetchUsersError, isFetchUsersSuccess, initFetchUsers } = useFetchUsers();

    // loading once the hook to fetch the users data when the component is mounted
    useEffect(() => {
        initFetchUsers();
    }, []);

    return (
        <Container>
            <FetchButton onClick={initFetchUsers}>
                {/* {fetchUserStatus === ApiStatus.LOADING ? "Loading..." : "Fetch Users"} */}
                {/* {isFetchUsersLoading ? "Loading..." : "Fetch Users"} */}

                <LazyLoader show={isFetchUsersLoading} delay={200} default="Fetch Users" />

            </FetchButton>

            <FlexContainer>
                <ContentContainer>
                    {users
                        ? users.map((user : User , index) => (
                            <React.Fragment key={index}>
                                <UserName>{user.name}</UserName>
                                <UserEmail>{user.email}</UserEmail>
                            </React.Fragment>
                        ))
                        : null}
                </ContentContainer>
            </FlexContainer>
        </Container>
    );
}
export default Users;
