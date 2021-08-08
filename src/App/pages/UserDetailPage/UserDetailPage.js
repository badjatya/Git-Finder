import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

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
    <div>
      <h1>User Detail</h1>
      <p>{user.name}</p>
      <p>{user.login}</p>
    </div>
  );
};

export default withRouter(UserDetailPage);
