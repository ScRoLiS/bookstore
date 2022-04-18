import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Spinner } from '../components'
import API from '../services/api'
import { addToCart, removeFromCart } from '../store/actions/cartAction'

const Book = () => {
  const id = parseInt(useParams().id)
  const [book, setBook] = useState([])
  const [loading, setLoading] = useState(true)
  const { cart } = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(addToCart(book[0]))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }

  const isInCart = (id) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id)
        return true
    }
    return false
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    API.getBook(id)
      .then((book) => {
        setBook([book])
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="flex-grow flex flex-col">
      {book.map((item, index) => {
        return (
          <div key={index} className="bg-white rounded-md p-4 shadow-md flex gap-4">
            <div className="shrink-0">
              <img src={item.image} alt={item.name} className="rounded-md " />
              <div className="flex justify-between mt-5">
                <span className="text-xl font-medium">Цена: {item.price} тг.</span>
                {isInCart(id)
                  ? <Button className="w-36" onHover="Убрать" onClick={handleRemoveFromCart} type="remove">В корзине</Button>
                  : <Button className="w-36" onClick={handleAddToCart} type="primary">В корзину</Button>
                }
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-4xl">{item.name}</h1>
              <div className="flex flex-col">
                <span>Автор: {item.authors.map((item) => `${item.name} `).join(', ')}</span>
                <span>Жанр: {item.genres.map((item) => `${item.name} `).join(', ')}</span>
                <span>Кол-во страниц: {item.pages}</span>
              </div>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        )
      })}
      {loading ? <Spinner /> : null}
    </div>
  )
}

export default Book