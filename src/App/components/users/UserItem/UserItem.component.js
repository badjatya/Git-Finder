import React from "react";

// Importing Components
import CustomButton from "../../layouts/CustomButton/CustomButton.component";

// Importing Styles
import {
  UserItemContainer,
  ImgContainer,
  Img,
  UserName,
} from "./UserItem.styles";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <UserItemContainer>
      <ImgContainer>
        <Img src={avatar_url} alt="User Image" />
      </ImgContainer>

      <UserName>{login}</UserName>
      <CustomButton title="More" href={html_url} />
    </UserItemContainer>
  );
};

export default UserItem;
