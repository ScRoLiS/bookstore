import { UserType } from "../types/userTypes"

const initialState = {
  user: {},
  jwt: '',
  auth: false,
}

const userReducer = (state = initialState, action) => {
  if (action.type === UserType.USER_LOGIN) {
    return { user: action.payload.user, jwt: action.payload.jwt, auth: true }
  }
  if (action.type === UserType.USER_LOGOUT) {
    return { user: {}, jwt: '', auth: false }
  }
  return state
}

export default userReducer