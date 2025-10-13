import { combineReducers } from "redux";
import { recipesReducer } from "./slices/recipes";

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export default rootReducer;
