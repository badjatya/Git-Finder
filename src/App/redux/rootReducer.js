import { combineReducers } from "redux";

// Importing Reducers
import githubReducer from "./Github/github.reducers";

const rootReducer = combineReducers({
  github: githubReducer,
});

export default rootReducer;
