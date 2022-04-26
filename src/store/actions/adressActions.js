import { AdressType } from "../types/adressTypes"

export const addAdress = (adress) => {
  return {
    type: AdressType.ADD_ADRESS,
    payload: adress
  }
}

export const removeAdress = (id) => {
  return {
    type: AdressType.REMOVE_ADRESS,
    payload: id
  }
}

export const setAdresses = (adresses) => {
  return {
    type: AdressType.SET_ADRESSES,
    payload: adresses
  }
}

export const resetAdresses = () => {
  return {
    type: AdressType.RESET_ADRESSES
  }
}