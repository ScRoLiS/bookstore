import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, CartFooter } from '../components'
import { useAuth } from '../hooks'
import API from '../services/api'
import { decrementCount, incrementCount, removeFromCart } from '../store/actions/cartAction'

const Cart = () => {
  const store = useStore()
  const isAuth = useAuth()
  const user = useSelector(state => state.user)
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const sendToServer = () => {
    API.udpateCart(user.jwt, store.getState().cart.cart)
      .catch((e) => {
        console.log(e);
      })
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id))
    if (isAuth)
      sendToServer()
  }

  const handleIncrementCount = (id) => {
    dispatch(incrementCount(id))
    if (isAuth)
      sendToServer()
  }

  const handleDecrementCount = (id) => {
    dispatch(decrementCount(id))
    if (isAuth)
      sendToServer()
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!cart.length) {
    return (
      <div className="flex flex-col items-center justify-center grow">
        <div className="p-10 text-center rounded-md shadow-md bg-white justify-center items-center flex flex-col">
          <span className="font-medium mb-2 text-lg md:text-2xl">Корзина пуста!</span>
          <span className="text-sm md:text-base">Перейдите в <Link to="/" className="link">Магазин</Link> для совершения покупок</span>
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 rounded-md shadow-md bg-white">
      <ul className="flex flex-col gap-6 list-none">
        {cart.map((item) => {
          return (
            <li key={item.id} className="grid grid-cols-1 sm:grid-cols-4 p-2 gap-2 shadow-sm rounded-md">
              <div className="flex items-start sm:col-span-3 gap-2">
                <img src={item.image.url} alt={item.name} className="rounded-md h-28 md:h-36" />
                <div className="flex flex-col md:gap-2 items-start h-full overflow-hidden overflow-ellipsis justify-between md:justify-start text-sm">
                  <span className="whitespace-nowrap w-full overflow-hidden overflow-ellipsis text-base font-medium">{item.name}</span>
                  <div className="flex flex-col md:gap-1">
                    <span>Автор: {item.authors.map((item) => `${item.name} `).join(', ')}</span>
                    <span>Кол-во страниц: {item.pages}</span>
                    <span>Жанр: {item.genres.map((item) => `${item.name}`).join(', ')}</span>
                  </div>
                  <div className="text-sm md:mt-auto">
                    <Link to={`/book/${item.id}`} className="link mr-3 border-none text-sky-600 hover:text-sky-200 hover:border-none">Подробнее</Link>
                    <Button type="link" onClick={() => { handleRemoveFromCart(item.id) }} className="border-none text-red-600 hover:text-red-200 hover:border-none">Убрать</Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 sm:flex-col sm:justify-center items-center sm:ml-auto lg:ml-0 lg:flex-row">
                <div className="flex shrink-0 relative gap-5 md:gap-7 items-center">
                  <Button type="ghost" disabled={item.count <= 1 ? true : false} onClick={() => { handleDecrementCount(item.id) }}>-</Button>
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{item.count}</span>
                  <Button type="ghost" onClick={() => { handleIncrementCount(item.id) }}>+</Button>
                </div>
                <div className="font-semibold text-base md:text-xl lg:ml-auto self-center relative sm:left-1">
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