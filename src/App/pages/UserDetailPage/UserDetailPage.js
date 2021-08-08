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
} from "./UserDetailPage.styles";

// Importing Components
import TextWrapper from "../../components/layouts/TextWrapper/TextWrapper.component";

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
      </LeftColumn>

      <RightColumn>
        <TextWrapper title="username" text={user.login ? user.login : "none"} />
        <TextWrapper
          title="location"
          text={user.location ? user.location : "none"}
        />
        <TextWrapper title="bio" text={user.bio ? user.bio : "None"} />
        <TextWrapper title="hireable" text={user.hireable ? "yes" : "no"} />
        <TextWrapper title="website" text={user.blog ? user.blog : "none"} />
        <TextWrapper
          title="twitter"
          text={user.twitter_username ? user.twitter_username : "none"}
        />
        <TextWrapper
          title="followers"
          text={user.followers ? user.followers : "none"}
        />
        <TextWrapper
          title="following"
          text={user.following ? user.following : "none"}
        />
        <TextWrapper
          title="public repository"
          text={user.public_repos ? user.public_repos : "none"}
        />
      </RightColumn>
    </UserDetail>
  );
};

export default withRouter(UserDetailPage);
