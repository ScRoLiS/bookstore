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