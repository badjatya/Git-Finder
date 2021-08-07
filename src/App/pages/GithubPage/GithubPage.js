import React from "react";

// Importing Components
import Users from "../../components/users/Users/Users.component";

// Importing redux
import { useSelector } from "react-redux";

const GithubPage = () => {
  let users = useSelector((state) => state.github.users);

  return <div>{users && <Users users={users} />}</div>;
};

export default GithubPage;
