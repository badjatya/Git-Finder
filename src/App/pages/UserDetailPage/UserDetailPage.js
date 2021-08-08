import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

// Importing Axios
import axios from "axios";

// importing styles
import {
  UserDetail,
  LeftColumn,
  RightColumn,
  ImgContainer,
  Img,
  Name,
  Button,
  ButtonContainer,
} from "./UserDetailPage.styles";

// Importing Components
import UserInformation from "../../components/users/UserInformation/UserInformation.component";

const UserDetailPage = ({ match }) => {
  //State
  const [user, setUser] = useState({});

  // Pulling username from params
  useEffect(() => {
    const username = match.params.login;
    searchUser(username);
  }, [match.params.login]);

  // Searching user data
  const searchUser = async (username) => {
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(response.data);
  };

  // console.log(user);
  return (
    <UserDetail>
      <LeftColumn>
        <ImgContainer>
          <Img src={user.avatar_url} alt="User Image" />
        </ImgContainer>
        <Name>{user.name}</Name>
        <ButtonContainer>
          <Button href={user.html_url}>Visit Profile</Button>
        </ButtonContainer>
      </LeftColumn>

      <RightColumn>
        <UserInformation user={user} />
      </RightColumn>
    </UserDetail>
  );
};

export default withRouter(UserDetailPage);
