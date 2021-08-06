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
  state = {
    users: [
      {
        id: 1,
        login: "Mojombo",
        avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo",
      },
      {
        id: 2,
        login: "defunkt",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunk",
      },
      {
        id: 3,
        login: "pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
      {
        id: 4,
        login: "pjhyett",
        avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett",
      },
    ],
  };
  render() {
    return (
      <UsersContainer>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </UsersContainer>
    );
  }
}

export default Users;
