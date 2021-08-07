import React from "react";
import styled from "styled-components";

// Importing Components
import UserItem from "../UserItem/UserItem.component";

const UsersContainer = styled.div`
  padding: 0;
  width: 1024px;
  max-width: 1024px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Users = (props) => {
  return (
    <UsersContainer>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </UsersContainer>
  );
};

export default Users;
