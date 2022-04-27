import { AppType } from "../types/appTypes"

export const setForward = (forward) => {
  return {
    type: AppType.SET_FORWARD,
    payload: forward
  }
}

export const resetForward = () => {
  return {
    type: AppType.RESET_FORWARD,
  }
}