import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const ViewPurchases = () => {

  const dispatch = useDispatch()
  const { purchases } = useSelector(state => state.purchases)

  if (!purchases.length)
    return (
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет покупок</span>
        </div>
      </div>
    )
}

export default ViewPurchases