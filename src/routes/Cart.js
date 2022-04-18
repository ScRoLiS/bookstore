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
      <div className="p-4 text-center  rounded-md shadow-md bg-white items-center flex flex-col">
        <span className="font-medium text-lg md:text-2xl">Корзина пуста!</span>
        <span className="text-sm md:text-base">Перейдите в <Link to="/" className="link">Магазин</Link> для совершения покупок</span>
      </div>
    )
  }

  return (
    <div className="md:p-4 rounded-md shadow-md bg-white">
      <ul className="flex flex-col gap-4 list-none">
        {cart.map((item) => {
          return (
            <li key={item.id} className="grid grid-cols-3 gap-2 p-4 shadow-sm rounded-md">
              <div className="flex items-start col-span-2 gap-2">
                <img src={item.image} alt={item.name} className="rounded-md h-28 md:h-40" />
                <div className="flex flex-col items-start h-full overflow-hidden overflow-ellipsis justify-between text-sm md:text-base">
                  <span className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis md:text-lg font-medium">{item.name}</span>
                  <span>Автор: {item.authors.map((item) => `${item.name} `).join(', ')}</span>
                  <span>Кол-во страниц: {item.pages}</span>
                  <span>Жанр: {item.genres.map((item) => `${item.name}`).join(', ')}</span>
                  <button onClick={() => { handleRemoveFromCart(item.id) }} className="link hover:text-red-400 hover:border-red-400 justify-center">Убрать</button>
                </div>
              </div>
              <div className="flex gap-2 flex-col justify-center items-center ml-auto lg:ml-0 lg:flex-row">
                <div className="flex shrink-0 relative gap-7 items-center">
                  <Button type="ghost" disabled={item.count <= 1 ? true : false} onClick={() => { handleDecrementCount(item.id) }}>-</Button>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{item.count}</span>
                  <Button type="ghost" onClick={() => { handleIncrementCount(item.id) }}>+</Button>
                </div>
                <div className="font-semibold text-base md:text-2xl lg:ml-auto self-center relative left-1">
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