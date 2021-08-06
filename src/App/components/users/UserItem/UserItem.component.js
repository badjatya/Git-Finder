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
  state = {
    id: "id",
    login: "Mojombo",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo",
  };
  render() {
    return (
      <UserItemContainer>
        <ImgContainer>
          <Img src={this.state.avatar_url} alt="User Image" />
        </ImgContainer>

        <UserName>{this.state.login}</UserName>
        <CustomButton title="More" href={this.state.html_url} />
      </UserItemContainer>
    );
  }
}
export default UserItem;
