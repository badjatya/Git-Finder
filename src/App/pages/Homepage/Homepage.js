import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Importing axios
import axios from "axios";

// Importing Img
import HeroImage from "../../assets/img/Hero.svg";

// Importing Styles
import {
  Home,
  TextContainer,
  ImgContainer,
  Img,
  H1,
  Input,
  Form,
} from "./Homepage.styles";

// Importing CustomButton
import CustomButton from "../../components/layouts/CustomButton/CustomButton.component";

const Homepage = (props) => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(response.data.items);
    setSearch("");
  };

  return (
    <Home>
      <TextContainer>
        <H1>Search Github Users</H1>
        <Form onSubmit={SubmitHandler}>
          <Input
            type="search"
            placeholder="Search Users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CustomButton as="button" title="Search" />
        </Form>
      </TextContainer>

      <ImgContainer>
        <Img src={HeroImage} />
      </ImgContainer>
    </Home>
  );
};

export default withRouter(Homepage);
