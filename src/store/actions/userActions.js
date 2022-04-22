import { UserType } from "../types/userTypes"

export const login = (data) => {
  return {
    type: UserType.USER_LOGIN,
    payload: data
  }
}

export const logout = () => {
  return {
    type: UserType.USER_LOGOUT,
  }
}