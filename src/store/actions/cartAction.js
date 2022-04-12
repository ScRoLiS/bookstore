import { CartType } from "../types/cartTypes"

export const addToCart = (book) => {
  return {
    type: CartType.ADD_TO_CART,
    payload: book
  }
}