import React from "react";
import styled from "styled-components";

// Importing Components
import UserItem from "../UserItem/UserItem.component";
import Spinner from "./../../layouts/Spinner/Spinner.component";

const UsersContainer = styled.div`
  width: 1024px;
  max-width: 1024px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15%;
`;

const Users = (props) => {
  if (props.loading) {
    return (
      <SpinnerContainer>
        <Spinner visible={props.loading} />
      </SpinnerContainer>
    );
  }
  return (
    <UsersContainer>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </UsersContainer>
  );
};

export default Users;
