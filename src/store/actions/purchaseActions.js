import { PurchaseType } from "../types/purchaseTypes"

export const addPurchase = (purchase) => {
  return {
    type: PurchaseType.ADD_PURCHASE,
    payload: purchase
  }
}

export const removePurchase = (id) => {
  return {
    type: PurchaseType.REMOVE_PURCHASE,
    payload: id
  }
}

export const setPurchases = (purchases) => {
  return {
    type: PurchaseType.SET_PURCHASES,
    payload: purchases
  }
}

export const resetPurchases = () => {
  return {
    type: PurchaseType.RESET_PURCHASES
  }
}