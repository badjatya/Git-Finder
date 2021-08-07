import React from "react";

// Importing Styles
import {
  UserItemContainer,
  ImgContainer,
  Img,
  UserName,
  Button,
} from "./UserItem.styles";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <UserItemContainer>
      <ImgContainer>
        <Img src={avatar_url} alt="User Image" />
      </ImgContainer>

      <UserName>{login}</UserName>
      <Button to={`/github/${login}`}>More</Button>
    </UserItemContainer>
  );
};

export default UserItem;
