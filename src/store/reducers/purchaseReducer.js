import { PurchaseType } from "../types/purchaseTypes"


const initialState = {
  purchases: []
}

const purchasesReducer = (state = initialState, action) => {
  if (action.type === PurchaseType.ADD_PURCHASE) {
    return { purchases: [...state.purchases, action.payload] }
  }
  if (action.type === PurchaseType.REMOVE_PURCHASE) {
    return { purchases: state.purchases.filter((item) => { return item.id !== action.payload }) }
  }
  if (action.type === PurchaseType.SET_PURCHASES) {
    return { purchases: action.payload }
  }
  if (action.type === PurchaseType.RESET_PURCHASES) {
    return { purchases: [] }
  }
  return state
}

export default purchasesReducer