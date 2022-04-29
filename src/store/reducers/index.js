import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import appReducer from "./appReducer";
import bookReducer from "./bookReducer";
import cardReducer from "./cardReducer";
import cartReducer from "./cartReducer";
import messageReducer from "./messageReducer";
import purchasesReducer from "./purchaseReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  books: bookReducer,
  cart: cartReducer,
  user: userReducer,
  messages: messageReducer,
  cards: cardReducer,
  addresses: addressReducer,
  app: appReducer,
  purchases: purchasesReducer
})