import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from '../components'
import { removeFromCart } from '../store/actions/cartAction'

const Cart = () => {
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  if (!cart.length) {
    return (
      <div className="p-4 rounded-md shadow-md bg-white items-center flex flex-col">
        <span className="font-medium text-2xl">Корзина пуста!</span>
        <span className="text-center">Перейдите в <Link to="/" className="link">Магазин</Link> для совершения покупок</span>
      </div>
    )
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white">
      <ul className="flex flex-col gap-4 list-none">
        {cart.map((item) => {
          return (
            <li key={item.id} className="flex gap-4 p-4">
              <img src={item.image} alt={item.name} className="rounded-md h-40" />
              <div className="flex flex-col items-start justify-between w-96">
                <span className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis text-lg font-medium">{item.name}</span>
                <span>Автор: {item.authors.map((item) => `${item.name} `).join(', ')}</span>
                <span>Кол-во страниц: {item.pages}</span>
                <span>Жанр: {item.genres.map((item) => `${item.name}`).join(', ')}</span>
                <button onClick={() => { handleRemoveFromCart(item.id) }} className="link hover:text-red-400 hover:border-red-400 justify-center">Убрать</button>
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