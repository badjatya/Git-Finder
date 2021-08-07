import React, { useState, useEffect } from "react";
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

// Importing redux
import { useDispatch } from "react-redux";
import * as githubActions from "../../redux/Github/github.actions";

const Homepage = ({ history }) => {
  const [search, setSearch] = useState("");
  const [githubUsers, setGithubUsers] = useState([]);

  const dispatch = useDispatch();

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setSearch("");
    setGithubUsers(response.data.items);
    history.push("/github");
  };

  useEffect(() => {
    dispatch(githubActions.setGithubUsers(githubUsers));
  }, [dispatch, githubUsers]);

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
