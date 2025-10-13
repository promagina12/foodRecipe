import { combineReducers } from "redux";
import { recipesReducer } from "./slices/recipes";
import { usersReducer } from "./slices/users";

const rootReducer = combineReducers({
  recipes: recipesReducer,
  users: usersReducer,
});

export default rootReducer;
