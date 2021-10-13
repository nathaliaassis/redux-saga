import { combineReducers } from "redux";
import authReducer from "./auth";
import addRemoveReducer from "./add_remove";
import starWarsReducer from "./star_wars_characters";
import clothesReducer from "./clothes";

const rootReducer = combineReducers({
  auth: authReducer,
  addRemove: addRemoveReducer,
  starWars: starWarsReducer,
  clothes: clothesReducer
});

export default rootReducer;