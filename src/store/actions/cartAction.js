import { CartType } from "../types/cartTypes"

export const addToCart = (book) => {
  return {
    type: CartType.ADD_TO_CART,
    payload: book
  }
}

export const removeFromCart = (id) => {
  return {
    type: CartType.REMOVE_FROM_CART,
    payload: id
  }
}

export const incrementCount = (id) => {
  return {
    type: CartType.INCREMENT_COUNT,
    payload: id
  }
}

export const decrementCount = (id) => {
  return {
    type: CartType.DECREMENT_COUNT,
    payload: id
  }
}