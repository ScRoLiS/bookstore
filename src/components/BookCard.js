import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks'
import API from '../services/api'
import { addToCart, removeFromCart } from '../store/actions/cartAction'
import Button from './Button'

const BookCard = (props) => {
  const dispatch = useDispatch()
  const store = useStore()
  const isAuth = useAuth()
  const user = useSelector(state => state.user)
  const { cart } = useSelector(state => {
    return state.cart
  })

  const isInCart = useCallback((id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id)
        return true
    }
    return false
  }, [cart])

  const sendToServer = () => {
    API.udpateCart(user.jwt, store.getState().cart.cart)
      .catch((e) => {
        console.log(e);
      })
  }

  const handleAddToCart = () => {
    dispatch(addToCart(props))
    if (isAuth)
      sendToServer()
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(props.id))
    if (isAuth)
      sendToServer()
  }

  return (
    <div className="bg-white flex shadow-md rounded-md overflow-hidden h-64">
      <img className="w-44" src={props.image.url} alt={props.name} />
      <div className="w-full p-4 flex flex-col">
        <span className="font-medium text-ellipsis">
          {props.name.length > 20 ? props.name.substring(0, 20) + '...' : props.name}
        </span>
        <div className="mt-auto text-xs flex flex-col gap-2">
          <span>Автор: {props.authors.map((item) => `${item.name} `)}</span>
          <span>Кол-во страниц: {props.pages}</span>
          <span className="font-medium text-sm">Цена: {props.price} тг.</span>
          <Link className="button button-outline" to={`/book/${props.id}`}>Подробнее</Link>
          {isInCart(props.id)
            ? <Button onHover="Убрать" onClick={handleRemoveFromCart} type="remove">В корзине</Button>
            : <Button onClick={handleAddToCart} type="primary">В корзину</Button>
          }
        </div>
      </div>
    </div>
  )
}

export default BookCard