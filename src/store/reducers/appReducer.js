import { AppType } from "../types/appTypes"


const initialState = {
  forward: null
}

const appReducer = (state = initialState, action) => {
  if (action.type === AppType.SET_FORWARD) {
    return { forward: action.payload }
  }
  if (action.type === AppType.RESET_FORWARD) {
    return { forward: null }
  }

  return state
}

export default appReducer