import { BookType } from "../types/bookTypes"

export const setBooks = (books) => {
  return {
    type: BookType.SET_BOOKS,
    payload: books
  }
}