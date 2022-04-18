import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, CartFooter } from '../components'
import { decrementCount, incrementCount, removeFromCart } from '../store/actions/cartAction'

const Cart = () => {
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
  }

  const handleIncrementCount = (id) => {
    dispatch(incrementCount(id))
  }

  const handleDecrementCount = (id) => {
    dispatch(decrementCount(id))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!cart.length) {
    return (
      <div className="p-4 rounded-md shadow-md bg-white items-center flex flex-col">
        <span className="font-medium text-lg md:text-2xl">Корзина пуста!</span>
        <span className="text-center text-sm md:text-base">Перейдите в <Link to="/" className="link">Магазин</Link> для совершения покупок</span>
      </div>
    )
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white">
      <ul className="flex flex-col gap-4 list-none">
        {cart.map((item) => {
          return (
            <li key={item.id} className="flex gap-4 p-4 shadow-sm rounded-md">
              <img src={item.image} alt={item.name} className="rounded-md h-40" />
              <div className="flex flex-col items-start justify-between w-96">
                <span className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis text-lg font-medium">{item.name}</span>
                <span>Автор: {item.authors.map((item) => `${item.name} `).join(', ')}</span>
                <span>Кол-во страниц: {item.pages}</span>
                <span>Жанр: {item.genres.map((item) => `${item.name}`).join(', ')}</span>
                <button onClick={() => { handleRemoveFromCart(item.id) }} className="link hover:text-red-400 hover:border-red-400 justify-center">Убрать</button>
              </div>
              <div className="flex xl:grow gap-2 sm:flex-col sm:justify-center sm:items-center xl:flex-row ml-auto">
                <div className="flex shrink-0 gap-2 xl:ml-32 items-center">
                  <Button type="ghost" disabled={item.count <= 1 ? true : false} onClick={() => { handleDecrementCount(item.id) }}>-</Button>
                  <span>{item.count}</span>
                  <Button type="ghost" onClick={() => { handleIncrementCount(item.id) }}>+</Button>
                </div>
                <div className="font-semibold text-2xl lg:ml-auto self-center relative left-1">
                  {item.price * item.count} тг.
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <CartFooter items={cart} />
    </div>
  )
}

export default Cart