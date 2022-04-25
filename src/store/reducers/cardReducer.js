import { CardType } from "../types/cardTypes"


const initialState = {
  cards: []
}

const cardReducer = (state = initialState, action) => {
  if (action.type === CardType.ADD_CARD) {
    return { cards: [...state.cards, action.payload] }
  }
  if (action.type === CardType.REMOVE_CARD) {
    return { cards: state.cards.filter((item) => { return item.id !== action.payload }) }
  }
  if (action.type === CardType.SET_CARDS) {
    return { cards: action.payload }
  }
  if (action.type === CardType.RESET_CARDS) {
    return { cards: [] }
  }
  return state
}

export default cardReducer