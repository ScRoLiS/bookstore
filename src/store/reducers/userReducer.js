import { UserType } from "../types/userTypes"

const getJWT = () => {
  const jwt = localStorage.getItem('jwt')

  return jwt ? JSON.parse(jwt) : ''
}

const initialState = {
  user: {},
  jwt: getJWT(),
}

const userReducer = (state = initialState, action) => {
  if (action.type === UserType.USER_LOGIN) {
    localStorage.setItem('jwt', JSON.stringify(action.payload.jwt))
    return { user: action.payload.user, jwt: action.payload.jwt }
  }
  if (action.type === UserType.USER_LOGOUT) {
    localStorage.removeItem('jwt')
    return { user: {}, jwt: '' }
  }
  return state
}

export default userReducer