import { CartType } from "../types/cartTypes"

const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  if (action.type === CartType.ADD_TO_CART) {
    return { cart: [...state.cart, action.payload] }
  }
  if (action.type === CartType.REMOVE_FROM_CART) {
    const newCart = state.cart.filter((item) => item.id !== action.payload)
    return { cart: newCart }
  }
  return state
}

export default cartReducer