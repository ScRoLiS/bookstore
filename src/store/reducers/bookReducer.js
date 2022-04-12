import { BookType } from "../types/bookTypes"

const initialState = {
  books: []
}

const bookReducer = (state = initialState, action) => {
  if (action.type === BookType.SET_BOOKS) {
    return { books: action.payload }
  }
  return state
}

export default bookReducer