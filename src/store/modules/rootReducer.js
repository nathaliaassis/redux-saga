import { combineReducers } from "redux";
import authReducer from "./auth";
import addRemoveReducer from "./add_remove";

const rootReducer = combineReducers({
  auth: authReducer,
  addRemove: addRemoveReducer
});

export default rootReducer;