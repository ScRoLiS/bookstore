import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../components'

const Cart = () => {
  const { cart } = useSelector(state => state.cart)

  return (
    <div className="p-4 rounded-md shadow-md bg-white">
      <ul className="flex flex-col gap-4 list-none">
        {cart.map((item) => {
          return (
            <li key={item.id} className="flex gap-4">
              <img src={item.img} alt={item.name} className=" rounded-md h-40" />
              <div className="flex flex-col w-96">
                <span className="text-lg font-medium">{item.name}</span>
                <span>Автор: {item.author}</span>
                <span>Кол-во страниц: {item.pages}</span>
                <span>Жанр: {item.genre}</span>
                <button className="underline justify-center">Убрать</button>
              </div>
              <div className="flex items-center">
                <Button className="shrink-0" type="outline">-</Button>
                <Button className="shrink-0" type="outline">+</Button>
              </div>
              <div className="font-bold text-2xl ml-auto self-center">
                {item.price} тг.
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cart