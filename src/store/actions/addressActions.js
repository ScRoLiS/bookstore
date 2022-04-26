import { AddressType } from "../types/addressTypes"

export const addAddress = (address) => {
  return {
    type: AddressType.ADD_ADDRESS,
    payload: address
  }
}

export const removeAddress = (id) => {
  return {
    type: AddressType.REMOVE_ADDRESS,
    payload: id
  }
}

export const setAddresses = (addresses) => {
  return {
    type: AddressType.SET_ADDRESSES,
    payload: addresses
  }
}

export const resetAddresses = () => {
  return {
    type: AddressType.RESET_ADDRESSES
  }
}