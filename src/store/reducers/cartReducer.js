import { CartType } from "../types/cartTypes"

const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  if (action.type === CartType.ADD_TO_CART) {
    return { cart: [...state.cart, action.payload] }
  }
  return state
}

export default cartReducer