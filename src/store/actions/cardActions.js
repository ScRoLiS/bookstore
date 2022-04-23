import { CardType } from "../types/cardTypes"

export const addCard = (card) => {
  return {
    type: CardType.ADD_CARD,
    payload: card
  }
}

export const removeCard = (id) => {
  return {
    type: CardType.REMOVE_CARD,
    payload: id
  }
}