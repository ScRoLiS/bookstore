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

export const setCards = (cards) => {
  return {
    type: CardType.SET_CARDS,
    payload: cards
  }
}

export const resetCards = () => {
  return {
    type: CardType.RESET_CARDS
  }
}