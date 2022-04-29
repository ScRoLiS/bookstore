import React from 'react'

const ViewCart = ({ cart }) => {

  const finalPrice = () => {
    return cart.reduce((prev, current) => { return prev + current.count * current.price }, 0)
  }
  
  return (
    <div className="flex flex-col gap-2 mt-2">
      {cart.map((item) => {
        return (
          <div key={item.id} className="flex gap-2 p-2 h-20 shadow-sm">
            <img src={item.image.url} alt={item.name} className="h-full rounded-md" />
            <div className="text-sm flex flex-col justify-between overflow-hidden">
              <h1 className="font-medium overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</h1>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">Количество: {item.count} шт.</span>
              <span className="overflow-hidden text-ellipsis whitespace-nowrap">Сумма: {item.count * item.price} тг.</span>
            </div>
          </div>
        )
      })}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center">
          <span className="shrink-0">Общее количество:</span>
          <div className="w-full border-dotted border-t-2 mx-2 mt-1"></div>
          <span className="shrink-0">{cart.reduce((prev, current) => { return prev + current.count }, 0)} шт.</span>
        </div>
        <div className="flex items-center">
          <span className="shrink-0">Сумма к оплате:</span>
          <div className="w-full border-dotted border-t-2 mx-2 mt-1"></div>
          <span className="shrink-0">{finalPrice()} тг.</span>
        </div>
      </div>
    </div>
  )
}

export default ViewCart