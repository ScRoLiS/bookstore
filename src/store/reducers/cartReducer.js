import { CartType } from "../types/cartTypes"

const initialState = {
  cart: []
}

const cartReducer = (state = initialState, action) => {
  if (action.type === CartType.ADD_TO_CART) {
    return { cart: [...state.cart, { ...action.payload, count: 1 }] }
  }

  if (action.type === CartType.REMOVE_FROM_CART) {
    const newCart = state.cart.filter((item) => item.id !== action.payload)
    return { cart: newCart }
  }

  if (action.type === CartType.INCREMENT_COUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload)
        return { ...item, count: item.count + 1 }
      return { ...item }
    })

    return { cart: newCart }
  }

  if (action.type === CartType.DECREMENT_COUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, count: item.count - 1 }
      }
      return { ...item }
    })

    return { cart: newCart }
  }

  return state
}

export default cartReducer