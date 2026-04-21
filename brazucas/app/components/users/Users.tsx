import React, { useState, useEffect } from "react";
import { fetchUsers } from "@/app/api/UsersAPI";
import styled from "styled-components";
import { User } from "@/app/types/UserType";

const useFetchUsers = () => {

    // users state to store the fetched users data
    const [users, setUsers] = useState<User[]>([]);

    /**
     * fetchUsers function to fetch the users data from the API and update the users state
     * it uses the API object to make the GET request to the users endpoint and updates the
     * users state with the response data
     */
    const initFetchUsers = async () => {

        // we load the response from the API
        const response = await fetchUsers();

        // we set the users state with the response data
        setUsers(response);
    };

    return {
        users,
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
    const { users, initFetchUsers } = useFetchUsers();

    // loading once the hook to fetch the users data when the component is mounted
    useEffect(() => {
        initFetchUsers();
    }, []);

    return (
        <Container>
            <FetchButton onClick={initFetchUsers}>Fetch Users</FetchButton>
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
