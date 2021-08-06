import React from "react";

// Importing Components
import Users from "../../components/users/Users/Users.component";

const GithubPage = (props) => {
  return (
    <div>
      <Users users={props.users} />
    </div>
  );
};

export default GithubPage;
