import React from 'react'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const ViewPurchases = () => {

  const { purchases } = useSelector(state => state.purchases)

  if (!purchases.length)
    return (
      <div className="flex grow justify-center items-center">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-lg">Нет покупок</span>
        </div>
      </div>
    )

  return (
    <div className="flex flex-col grow">
      <div className="flex flex-col gap-2">
        <div className="purchase-table-row font-medium">
          <div>Номер заказа</div>
          <div>Кол-во товаров</div>
          <div>Статус</div>
        </div>
        {purchases.map((item) => {
          return (
            <div className="purchase-table-row shadow-sm p-2 rounded-md" key={item.id}>
              <div>{item.id}</div>
              <div>{item.purchase.length}</div>
              <div>{item.status}</div>
              <div className="flex"><Link to={`/user/purchases/${item.id}`} className="link ml-auto mr-2 border-none text-xs md:text-sm text-sky-600 hover:text-sky-200 hover:border-none">Подробнее</Link></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ViewPurchases