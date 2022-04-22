import { MessageType } from "../types/messageTypes"

export const addMessage = (id, type, message) => {
  return {
    type: MessageType.ADD_MESSAGE,
    payload: { id, type, message }
  }
}

export const removeMessage = (id) => {
  return {
    type: MessageType.REMOVE_MESSAGE,
    payload: id
  }
}