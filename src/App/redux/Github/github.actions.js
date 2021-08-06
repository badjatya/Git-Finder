// Importing Action types
import GithubTypes from "./github.types";

export const setGithubUsers = (users) => ({
  type: GithubTypes.SET_GITHUB_USERS,
  payload: users,
});

export const setGithubUser = (user) => ({
  type: GithubTypes.SET_GITHUB_USER,
  payload: user,
});
