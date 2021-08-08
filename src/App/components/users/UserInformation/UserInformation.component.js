import React from "react";

// Importing Components
import TextWrapper from "../../layouts/TextWrapper/TextWrapper.component";

const UserInformation = ({ user }) => {
  return (
    <div>
      <TextWrapper title="username" text={user.login ? user.login : "none"} />
      <TextWrapper
        title="location"
        text={user.location ? user.location : "none"}
      />
      <TextWrapper title="bio" text={user.bio ? user.bio : "None"} />
      <TextWrapper title="hireable" text={user.hireable ? "yes" : "no"} />
      <TextWrapper title="website" text={user.blog ? user.blog : "none"} />
      <TextWrapper
        title="twitter"
        text={user.twitter_username ? user.twitter_username : "none"}
      />
      <TextWrapper
        title="followers"
        text={user.followers ? user.followers : 0}
      />
      <TextWrapper
        title="following"
        text={user.following ? user.following : 0}
      />
      <TextWrapper
        title="public repository"
        text={user.public_repos ? user.public_repos : 0}
      />

      <TextWrapper
        title="public gists"
        text={user.public_gists ? user.public_gists : 0}
      />
    </div>
  );
};

export default UserInformation;
