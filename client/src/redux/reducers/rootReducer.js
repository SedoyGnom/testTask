import { combineReducers } from "redux";
import { restaurantsReducer } from "./restaurantsReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  userReducer,
  restaurantsReducer,
})
