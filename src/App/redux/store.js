import { createStore } from "redux";

// Importing Root reducer
import rootReducer from "./rootReducer";

const store = createStore(rootReducer);

export default store;
