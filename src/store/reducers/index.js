import { combineReducers } from "redux";
import adressReducer from "./adressReducer";
import bookReducer from "./bookReducer";
import cardReducer from "./cardReducer";
import cartReducer from "./cartReducer";
import messageReducer from "./messageReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  user: userReducer,
  messages: messageReducer,
  cards: cardReducer,
  adresses: adressReducer
})