// Importing Github action types
import GithubTypes from "./github.types";

const InitialState = {
  searchText: "",
  users: [],
  user: {},
};

const githubReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GithubTypes.SET_GITHUB_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case GithubTypes.SET_GITHUB_USER:
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default githubReducer;
