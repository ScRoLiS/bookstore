import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer
})