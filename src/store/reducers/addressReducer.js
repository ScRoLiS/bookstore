import { AddressType } from "../types/addressTypes"


const initialState = {
  addresses: []
}

const addressReducer = (state = initialState, action) => {
  if (action.type === AddressType.ADD_ADDRESS) {
    return { addresses: [...state.addresses, action.payload] }
  }
  if (action.type === AddressType.REMOVE_ADDRESS) {
    return { addresses: state.addresses.filter((item) => { return item.id !== action.payload }) }
  }
  if (action.type === AddressType.SET_ADDRESSES) {
    return { addresses: action.payload }
  }
  if (action.type === AddressType.RESET_ADDRESSES) {
    return { addresses: [] }
  }
  return state
}

export default addressReducer