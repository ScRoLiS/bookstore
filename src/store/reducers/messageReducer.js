import { MessageType } from "../types/messageTypes"

const initialState = {
  messages: []
}

const messageReducer = (state = initialState, action) => {
  if (action.type === MessageType.ADD_MESSAGE) {
    return { messages: [...state.messages, { ...action.payload }] }
  }
  if (action.type === MessageType.REMOVE_MESSAGE) {
    return { messages: state.messages.filter((item) => { return item.id !== action.payload }) }
  }
  return state
}

export default messageReducer