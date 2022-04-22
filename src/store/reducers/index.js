import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  user: userReducer,
  messages: messageReducer
})