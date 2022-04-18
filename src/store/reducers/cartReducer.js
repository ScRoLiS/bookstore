import { CartType } from "../types/cartTypes"

const localStorageCart = localStorage.getItem('cart')

const initialState = {
  cart: localStorageCart?.length ? JSON.parse(localStorageCart) : []
}

const cartReducer = (state = initialState, action) => {
  if (action.type === CartType.ADD_TO_CART) {
    const newCart = { cart: [...state.cart, { ...action.payload, count: 1 }] }
    localStorage.setItem('cart', JSON.stringify(newCart.cart))
    return newCart
  }

  if (action.type === CartType.REMOVE_FROM_CART) {
    const newCart = state.cart.filter((item) => item.id !== action.payload)
    localStorage.setItem('cart', JSON.stringify(newCart))

    return { cart: newCart }
  }

  if (action.type === CartType.INCREMENT_COUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload)
        return { ...item, count: item.count + 1 }
      return { ...item }
    })

    localStorage.setItem('cart', JSON.stringify(newCart))

    return { cart: newCart }
  }

  if (action.type === CartType.DECREMENT_COUNT) {
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, count: item.count - 1 }
      }
      return { ...item }
    })

    localStorage.setItem('cart', JSON.stringify(newCart))

    return { cart: newCart }
  }

  return state
}

export default cartReducer