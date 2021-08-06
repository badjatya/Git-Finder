import React, { Component } from "react";
import styled from "styled-components";

// Importing Components
import UserItem from "../UserItem/UserItem.component";

const UsersContainer = styled.div`
  width: 1024px;
  max-width: 1024px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  /* justify-content: space-evenly; */
  flex-wrap: wrap;
`;

class Users extends Component {
  render() {
    return (
      <UsersContainer>
        {this.props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </UsersContainer>
    );
  }
}

export default Users;
