import React from "react";
import styled from "styled-components";

// Importing Components
import Users from "../../components/users/Users/Users.component";

// Importing redux
import { useSelector } from "react-redux";

const GithubPage = () => {
  let users = useSelector((state) => state.github.users);

  return (
    <GithubPageContainer>
      {users && <Users users={users} />}
    </GithubPageContainer>
  );
};

export default GithubPage;

const GithubPageContainer = styled.div`
  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    margin-top: 50px;
  }
`;
