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