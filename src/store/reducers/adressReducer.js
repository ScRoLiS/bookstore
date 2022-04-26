import { AdressType } from "../types/adressTypes"


const initialState = {
  adresses: []
}

const adressReducer = (state = initialState, action) => {
  if (action.type === AdressType.ADD_ADRESS) {
    return { adresses: [...state.adresses, action.payload] }
  }
  if (action.type === AdressType.REMOVE_ADRESS) {
    return { adresses: state.adresses.filter((item) => { return item.id !== action.payload }) }
  }
  if (action.type === AdressType.SET_ADRESSES) {
    return { adresses: action.payload }
  }
  if (action.type === AdressType.RESET_ADRESSES) {
    return { adresses: [] }
  }
  return state
}

export default adressReducer