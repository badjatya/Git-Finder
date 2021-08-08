import React from "react";
import { withRouter } from "react-router-dom";

// Importing Styles
import {
  UserItemContainer,
  ImgContainer,
  Img,
  UserName,
  Button,
} from "./UserItem.styles";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;

  const userClickHandler = () => {
    props.history.push(`/github/${login}`);
  };
  return (
    <UserItemContainer>
      <ImgContainer>
        <Img src={avatar_url} alt="User Image" />
      </ImgContainer>

      <UserName>{login}</UserName>
      <Button onClick={userClickHandler}>More</Button>
    </UserItemContainer>
  );
};

export default withRouter(UserItem);
