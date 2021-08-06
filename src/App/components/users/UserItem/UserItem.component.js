import React, { Component } from "react";

// Importing Components
import CustomButton from "../../layouts/CustomButton/CustomButton.component";

// Importing Styles
import {
  UserItemContainer,
  ImgContainer,
  Img,
  UserName,
} from "./UserItem.styles";

class UserItem extends Component {
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <UserItemContainer>
        <ImgContainer>
          <Img src={avatar_url} alt="User Image" />
        </ImgContainer>

        <UserName>{login}</UserName>
        <CustomButton title="More" href={html_url} />
      </UserItemContainer>
    );
  }
}
export default UserItem;
