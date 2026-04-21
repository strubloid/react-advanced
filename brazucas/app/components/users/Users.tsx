import React, { useState, useEffect } from "react";
import { fetchUsers } from "@/app/api/UsersAPI";
import styled from "styled-components";
import { User } from "@/app/types/UserType";
import { withAsync } from "@/app/helpers/WithAsync";
import type { WithAsyncResult } from "@/app/helpers/WithAsync";
import { ApiStatus, APIStatysType } from "@/app/constants/APIStatus";
import { UseApiStatus } from "@/app/api/hooks/UseAPIStatus";
import LazyLoader from "../loaders/LazyLoader";
import { UseAPI } from "@/app/api/hooks/UseAPI";

const useFetchUsers = () => {

    const {
        data : users,
        exec : initFetchUsers,
        status: fetchUsersStatus,
        isIdle: isFetchUsersIdle,
        isLoading: isFetchUsersLoading,
        isError: isFetchUsersError,
        isSuccess: isFetchUsersSuccess,
    } = UseAPI( async () => await fetchUsers())

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
